const $hrsInput = document.querySelector(".hrs-input");
const $minInput = document.querySelector(".min-input");
const $secInput = document.querySelector(".sec-input");
const $startBtn = document.querySelector(".start-btn");
const $resetBtn = document.querySelector(".reset-btn");

const $hrsDisplay = document.querySelector(".hrs-display");
const $minDisplay = document.querySelector(".min-display");
const $secDisplay = document.querySelector(".sec-display");

let isRunning = false;

$startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;

    let realTime =
      +$hrsInput.value * 3600 + +$minInput.value * 60 + +$secInput.value;

    const timer = setInterval(() => {
      realTime -= 1;

      if (realTime == 0) {
        isRunning = false;
        window.alert("Finish");
        clearInterval(timer);
      }
      if ($hrsDisplay.value == 0) {
        $hrsDisplay.value = 0;
      }
      if ($minDisplay.value == -1) {
        $minDisplay.value = 59;
      }
      if ($secDisplay.value == -1) {
        $secDisplay.value = 59;
      }
      $hrsDisplay.value = Math.floor(realTime / 3600);
      $minDisplay.value = Math.floor((realTime % 3600) / 60);
      $secDisplay.value = realTime % 60;
    }, 1000);

    $resetBtn.addEventListener("click", () => {
      isRunning = false;
      if (timer) {
        clearInterval(timer);
      }
      $hrsInput.value = 0;
      $minInput.value = 0;
      $secInput.value = 0;
      $hrsDisplay.value = 0;
      $minDisplay.value = 0;
      $secDisplay.value = 0;
    });
  }
});
