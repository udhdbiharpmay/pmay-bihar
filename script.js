document.addEventListener("DOMContentLoaded", () => {

    // Lamp Animation
    const rope = document.getElementById("rope");
    const bulb = document.getElementById("bulb");
    const glow = document.getElementById("lightGlow");
    const screen = document.getElementById("welcomeScreen");
    const portal = document.getElementById("portalContent");

    if (rope) {
        rope.addEventListener("click", () => {

            rope.style.transform = "translateY(25px)";

            setTimeout(() => {
                rope.style.transform = "translateY(0)";
            }, 200);

            if (bulb) {
                bulb.style.background = "#ffcc66";
                bulb.style.boxShadow = "0 0 20px #ffcc66";
            }

            if (glow) {
                glow.style.opacity = "1";
            }

            setTimeout(() => {

                if (screen) {
                    screen.style.opacity = "0";

                    setTimeout(() => {
                        screen.style.display = "none";

                        if (portal) {
                            portal.classList.add("show");
                        }

                    }, 1000);
                }

            }, 1500);

        });
    }

    // PMAY Form Logic

    const pmayForm = document.getElementById("pmayForm");

    if (pmayForm) {

        let currentStep = 0;

        const steps = document.querySelectorAll(".form-step");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");
        const submitBtn = document.getElementById("submitBtn");
        const stepNumber = document.getElementById("stepNumber");

        function showStep(step) {

            steps.forEach((item) => {
                item.classList.remove("active");
            });

            steps[step].classList.add("active");

            if (stepNumber) {
                stepNumber.innerText = step + 1;
            }

            prevBtn.style.display =
                step === 0 ? "none" : "inline-block";

            nextBtn.style.display =
                step === steps.length - 1
                    ? "none"
                    : "inline-block";

            submitBtn.style.display =
                step === steps.length - 1
                    ? "inline-block"
                    : "none";
        }

        nextBtn.addEventListener("click", () => {

            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }

        });

        prevBtn.addEventListener("click", () => {

            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }

        });

        pmayForm.addEventListener("submit", function (e) {

            e.preventDefault();

            let appId =
                "PMAYBR" +
                Math.floor(
                    100000 + Math.random() * 900000
                );

            document.getElementById("applicationId").innerHTML =
                `
                <h2 style="color:green;">
                    Application Submitted Successfully
                </h2>

                <h3>
                    Application ID : ${appId}
                </h3>
                `;
        });

        showStep(0);
    }

});
