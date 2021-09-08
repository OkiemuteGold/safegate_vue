/* eslint-disable */
<template>
    <div>
        <section class="hero-section relative hidden" id="home">
            <Hero />
        </section>
        <Actions />
        <!-- <div class="clearfix"></div>
        <div class="clearfix"></div> -->
        <HomeInfo1 />
        <HomeProduct />
        <HomeInfo2 />
        <HomeInfoBlog />
        <!-- <HomeInfo3 /> -->
    </div>
</template>
<script>
import { mapActions } from "vuex";
import Hero from "../components/homeComponents/Hero";
import Actions from "../components/homeComponents/Actions";
import HomeInfo1 from "../components/homeComponents/HomeInfo1";
import HomeProduct from "../components/homeComponents/HomeProduct";
import HomeInfo2 from "../components/homeComponents/HomeInfo2";
import HomeInfoBlog from "../components/homeComponents/HomeInfoBlog";
// import HomeInfo3 from "../components/homeComponents/HomeInfo3";
import $ from "jquery";
export default {
    name: "Home",
    components: {
        Hero,
        Actions,
        HomeInfo1,
        HomeProduct,
        HomeInfo2,
        HomeInfoBlog,
        // HomeInfo3,
    },

    computed: {},

    data() {
        return {};
    },

    methods: {
        ...mapActions([
            "currentSitePage",
            "closePageLoading",
            "showPageLoading",
        ]),
        removeOffcanvas: function () {
            document.body.classList.remove("mobile-menu-visible");
        },
    },
    mounted() {
        this.currentSitePage(this.$router.history.current.path);
        this.closePageLoading();
        var animationDelay = 2500,
            //loading bar effect
            barAnimationDelay = 3800,
            barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
            //letters effect
            lettersDelay = 50,
            //type effect
            typeLettersDelay = 150,
            selectionDuration = 500,
            typeAnimationDelay = selectionDuration + 800,
            //clip effect
            revealDuration = 600,
            revealAnimationDelay = 1500;

        initHeadline();

        function initHeadline() {
            //insert <i> element for each letter of a changing word
            singleLetters($(".cd-headline.letters").find("b"));
            //initialise headline animation
            animateHeadline($(".cd-headline"));
        }

        function singleLetters($words) {
            let i;
            $words.each(function () {
                var word = $(this),
                    letters = word.text().split(""),
                    selected = word.hasClass("is-visible");
                for (i in letters) {
                    if (word.parents(".rotate-2").length > 0)
                        letters[i] = "<em>" + letters[i] + "</em>";
                    letters[i] = selected
                        ? '<i class="in">' + letters[i] + "</i>"
                        : "<i>" + letters[i] + "</i>";
                }
                var newLetters = letters.join("");
                word.html(newLetters).css("opacity", 1);
            });
        }

        function animateHeadline($headlines) {
            var duration = animationDelay;
            $headlines.each(function () {
                var headline = $(this);

                if (headline.hasClass("loading-bar")) {
                    duration = barAnimationDelay;
                    setTimeout(function () {
                        headline
                            .find(".cd-words-wrapper")
                            .addClass("is-loading");
                    }, barWaiting);
                } else if (headline.hasClass("clip")) {
                    var spanWrapper = headline.find(".cd-words-wrapper"),
                        newWidth = spanWrapper.width() + 10;
                    spanWrapper.css("width", newWidth);
                } else if (!headline.hasClass("type")) {
                    //assign to .cd-words-wrapper the width of its longest word
                    var words = headline.find(".cd-words-wrapper b"),
                        width = 0;
                    words.each(function () {
                        var wordWidth = $(this).width();
                        if (wordWidth > width) width = wordWidth;
                    });
                    headline.find(".cd-words-wrapper").css("width", width);
                }

                //trigger animation
                setTimeout(function () {
                    hideWord(headline.find(".is-visible").eq(0));
                }, duration);
            });
        }

        function hideWord($word) {
            var nextWord = takeNext($word);

            if ($word.parents(".cd-headline").hasClass("type")) {
                var parentSpan = $word.parent(".cd-words-wrapper");
                parentSpan.addClass("selected").removeClass("waiting");
                setTimeout(function () {
                    parentSpan.removeClass("selected");
                    $word
                        .removeClass("is-visible")
                        .addClass("is-hidden")
                        .children("i")
                        .removeClass("in")
                        .addClass("out");
                }, selectionDuration);
                setTimeout(function () {
                    showWord(nextWord, typeLettersDelay);
                }, typeAnimationDelay);
            } else if ($word.parents(".cd-headline").hasClass("letters")) {
                var bool =
                    $word.children("i").length >= nextWord.children("i").length
                        ? true
                        : false;
                hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
                showLetter(
                    nextWord.find("i").eq(0),
                    nextWord,
                    bool,
                    lettersDelay
                );
            } else if ($word.parents(".cd-headline").hasClass("clip")) {
                $word
                    .parents(".cd-words-wrapper")
                    .animate({ width: "2px" }, revealDuration, function () {
                        switchWord($word, nextWord);
                        showWord(nextWord);
                    });
            } else if ($word.parents(".cd-headline").hasClass("loading-bar")) {
                $word.parents(".cd-words-wrapper").removeClass("is-loading");
                switchWord($word, nextWord);
                setTimeout(function () {
                    hideWord(nextWord);
                }, barAnimationDelay);
                setTimeout(function () {
                    $word.parents(".cd-words-wrapper").addClass("is-loading");
                }, barWaiting);
            } else {
                switchWord($word, nextWord);
                setTimeout(function () {
                    hideWord(nextWord);
                }, animationDelay);
            }
        }

        function showWord($word, $duration) {
            if ($word.parents(".cd-headline").hasClass("type")) {
                showLetter($word.find("i").eq(0), $word, false, $duration);
                $word.addClass("is-visible").removeClass("is-hidden");
            } else if ($word.parents(".cd-headline").hasClass("clip")) {
                $word
                    .parents(".cd-words-wrapper")
                    .animate(
                        { width: $word.width() + 10 },
                        revealDuration,
                        function () {
                            setTimeout(function () {
                                hideWord($word);
                            }, revealAnimationDelay);
                        }
                    );
            }
        }

        function hideLetter($letter, $word, $bool, $duration) {
            $letter.removeClass("in").addClass("out");

            if (!$letter.is(":last-child")) {
                setTimeout(function () {
                    hideLetter($letter.next(), $word, $bool, $duration);
                }, $duration);
            } else if ($bool) {
                setTimeout(function () {
                    hideWord(takeNext($word));
                }, animationDelay);
            }

            if (
                $letter.is(":last-child") &&
                $("html").hasClass("no-csstransitions")
            ) {
                var nextWord = takeNext($word);
                switchWord($word, nextWord);
            }
        }

        function showLetter($letter, $word, $bool, $duration) {
            $letter.addClass("in").removeClass("out");

            if (!$letter.is(":last-child")) {
                setTimeout(function () {
                    showLetter($letter.next(), $word, $bool, $duration);
                }, $duration);
            } else {
                if ($word.parents(".cd-headline").hasClass("type")) {
                    setTimeout(function () {
                        $word.parents(".cd-words-wrapper").addClass("waiting");
                    }, 200);
                }
                if (!$bool) {
                    setTimeout(function () {
                        hideWord($word);
                    }, animationDelay);
                }
            }
        }

        function takeNext($word) {
            return !$word.is(":last-child")
                ? $word.next()
                : $word.parent().children().eq(0);
        }

        // function takePrev($word) {
        //   return !$word.is(":first-child")
        //     ? $word.prev()
        //     : $word
        //         .parent()
        //         .children()
        //         .last();
        // }

        function switchWord($oldWord, $newWord) {
            $oldWord.removeClass("is-visible").addClass("is-hidden");
            $newWord.removeClass("is-hidden").addClass("is-visible");
        }
    },
    beforeRouteLeave(to, from, next) {
        next();
        this.removeOffcanvas();
    },
    // beforeRouteEnter(to, from, next) {
    //     $(".navbar-collapse").removeClass("menu-opened");
    //     $(".navbar-toggler").removeClass("actived");
    //     next();
    // },
};
</script>
<style scoped>
.hero-section {
    position: relative;
}
/* .hero-section:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background: linear-gradient(
        to bottom right,
        rgba(0, 0, 0, 0.15),
        rgba(250, 0, 0, 0.15)
    );
} */
</style>
