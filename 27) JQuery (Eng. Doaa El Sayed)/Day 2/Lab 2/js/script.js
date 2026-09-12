$(document).ready(function () {


    /* =========================
       ASSIGNMENT 1 - LOGIN
    ========================= */

    if ($("#loginDialog").length) {

        $("#loginDialog").dialog({
            autoOpen: false,
            modal: true,
            width: 450,
            buttons: {
                "Login": function () {

                    if ($("#loginForm").valid()) {

                        let user = $("#username").val();

                        $("#welcomeMessage").html(
                            "Welcome " + user
                        );

                        $(this).dialog("close");
                    }
                },

                "Cancel": function () {
                    $(this).dialog("close");
                }
            }
        });

        $("#openLogin").click(function () {
            $("#loginDialog").dialog("open");
        });

        $("#loginForm").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 3
                },
                password: {
                    required: true,
                    minlength: 6
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 11,
                    maxlength: 11
                }
            }
        });
    }


    /* =========================
       ASSIGNMENT 2
    ========================= */

    if ($("#dragImage").length && $("#dropArea").length) {

        $("#dragImage").draggable({
            revert: "invalid"
        });

        $("#dropArea").droppable({

            accept: "#dragImage",

            drop: function () {

                $(this).css("background-color", "lightgreen");
                $(this).text("Dropped!");
            }
        });
    }

/* =========================
   ASSIGNMENT 3
========================= */

if ($("#accordion").length) {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
}

if ($(".slider").length) {

    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        accessibility: true
    });

    // KEYBOARD SUPPORT (LEFT / RIGHT ARROWS)
    $(document).on("keydown", function (e) {

        // prevent page scroll
        if (e.which === 37 || e.which === 39) {
            e.preventDefault();
        }

        // left arrow → previous slide
        if (e.which === 37) {
            $(".slider").slick("slickPrev");
        }

        // right arrow → next slide
        if (e.which === 39) {
            $(".slider").slick("slickNext");
        }
    });
}

/* =========================
   BONUS GAME
========================= */


    if ($("#person").length === 0) return;

    let score = 0;
    let totalBalls = 1;
    let gameEnded = false;

    const MAX_BALLS = 5;

    let person = $("#person");

    person.draggable({
        containment: "#gameArea",
        drag: checkCollision,
        stop: checkCollision
    });

    /* TIMER */
    let time = 60;

    let timer = setInterval(function () {

        if (gameEnded) return;

        time--;
        $("#timer").text(time);

        if (time <= 0) {
            endGame("Time Over", "Final Score: " + score);
        }

    }, 1000);

    /* BALL HIT EVENT */
    $("#gameArea").on("ballHit", ".ball", function () {

        if (gameEnded) return;
        if ($(this).data("hit")) return;

        $(this).data("hit", true);

        score++;
        $("#score").text(score);

        // remove ball
        $(this).fadeOut(200, function () {
            $(this).remove();
        });

        if (totalBalls < MAX_BALLS) {
            createBall();
        } else {
            endGame("Congratulations", "You reached 5 balls!");
        }
    });

    /* KEYBOARD MOVEMENT */
    $(document).on("keydown", function (e) {

        if (gameEnded) return;

        // stop page scroll
        if ([37, 38, 39, 40].includes(e.which)) {
            e.preventDefault();
        }

        let step = 15;

        let pos = person.position();

        let left = pos.left;
        let top = pos.top;

        const maxLeft = $("#gameArea").width() - person.width();
        const maxTop = $("#gameArea").height() - person.height();

        switch (e.which) {
            case 37: left -= step; break;
            case 38: top -= step; break;
            case 39: left += step; break;
            case 40: top += step; break;
            default: return;
        }

        person.css({
            left: Math.max(0, Math.min(maxLeft, left)),
            top: Math.max(0, Math.min(maxTop, top))
        });

        checkCollision();
    });

    /* CREATE BALL */
    function createBall() {

        totalBalls++;
        $("#ballsCount").text(totalBalls);

        let x = Math.random() * 750;
        let y = Math.random() * 500;

        let ball = $(`
            <img src="images/ball.png"
                 class="ball"
                 style="left:${x}px; top:${y}px;">
        `);

        ball.data("hit", false);

        $("#gameArea").append(ball);
    }

    /* COLLISION */
    function checkCollision() {

        if (gameEnded) return;

        let p = person.position();

        let pLeft = p.left;
        let pTop = p.top;
        let pRight = pLeft + person.width();
        let pBottom = pTop + person.height();

        $(".ball").each(function () {

            let b = $(this).position();

            let bLeft = b.left;
            let bTop = b.top;
            let bRight = bLeft + $(this).width();
            let bBottom = bTop + $(this).height();

            let overlap = !(
                pRight < bLeft ||
                pLeft > bRight ||
                pBottom < bTop ||
                pTop > bBottom
            );

            if (overlap && !$(this).data("hit")) {
                $(this).trigger("ballHit");
            }
        });
    }

    /* END GAME */
    function endGame(title, text) {

        gameEnded = true;
        clearInterval(timer);

        $("#gameArea").off("ballHit");

        Swal.fire({
            icon: "info",
            title: title,
            text: text
        });
    }

});
