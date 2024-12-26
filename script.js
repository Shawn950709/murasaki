document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const image3 = document.getElementById("image3");
  const image4 = document.getElementById("image4");
  const image5 = document.getElementById("image5");

  // 按鈕 1
  btn1.addEventListener("click", () => {
    image1.classList.add("show");
    btn1.style.display = "none";
    btn2.style.display = "inline-block";
  });

  // 按鈕 2
  btn2.addEventListener("click", () => {
    image2.classList.add("show");
    btn2.style.display = "none";
    btn3.style.display = "inline-block";
  });

  // 按鈕 3
  btn3.addEventListener("click", () => {
    // 移動圖片到中間
    image1.style.transition = "transform 2s, opacity 1.5s";
    image2.style.transition = "transform 2s, opacity 1.5s";
    image1.style.transform = "translate(50%, 0)";
    image2.style.transform = "translate(-50%, 0)";

    setTimeout(() => {
      // 隱藏第一張和第二張圖片
      image1.classList.remove("show");
      image2.classList.remove("show");

      // 顯示第三張圖片
      image3.classList.add("move-to-center");
      image3.classList.add("show");

      setTimeout(() => {
        // 隱藏第三張圖片
        image3.classList.remove("show");

        // 顯示第四張圖片
        image4.classList.add("move-to-center");
        image4.classList.add("show");

        setTimeout(() => {
          // 隱藏第四張圖片
          image4.classList.remove("show");

          // 顯示第五張圖片
          image5.classList.add("move-to-center");
          image5.classList.add("show");

          setTimeout(() => {
            // 顯示彈出訊息
            window.alert("大丈夫 僕最強だから!(沒問題!我是最強的!)");
          }, 1500); // 第五張圖顯示 1.5 秒後彈出訊息
        }, 2000); // 第四張圖顯示 2 秒後切換
      }, 2000); // 第三張圖顯示 2 秒後切換
    }, 2000); // 第一張與第二張圖片移動動畫完成後
    btn3.style.display = "none";
  });
});