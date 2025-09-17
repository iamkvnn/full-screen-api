      // FAQ Toggle Functionality
      document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", () => {
          const answer = question.nextElementSibling;
          const isActive = question.classList.contains("active");

          // Close all other FAQ items
          document.querySelectorAll(".faq-question").forEach((q) => {
            q.classList.remove("active");
            q.nextElementSibling.classList.remove("active");
          });

          // Toggle current item
          if (!isActive) {
            question.classList.add("active");
            answer.classList.add("active");
          }
        });
      });

      // Smooth scrolling for CTA button
      document.querySelector(".cta-button").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".features").scrollIntoView({
          behavior: "smooth",
        });
      });

      // Header background on scroll
      window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 100) {
          header.style.background = "rgba(0,0,0,0.9)";
        } else {
          header.style.background =
            "linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)";
        }
      });
      const btn = document.getElementById("sign-in-button");
      const dialog = document.getElementById("trollDialog");
      const closeBtn = document.getElementById("closeTroll");
      const audio = document.getElementById("trollAudio");

      btn.addEventListener("click", () => {
        dialog.style.display = "flex";
        audio.currentTime = 0; // phát từ đầu
        audio.play();
      });

      closeBtn.addEventListener("click", () => {
        dialog.style.display = "none";
        audio.pause();
      });