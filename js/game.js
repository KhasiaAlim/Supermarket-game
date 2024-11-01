// MODAL-1

const modal1 = document.querySelector(".modal1");
const overlay1 = document.querySelector(".overlay1");
const openModalBtn1 = document.querySelector(".shop");
const openModal1 = function () {
    modal1.classList.remove("hidden");
    overlay1.classList.remove("hidden");
};

const closeModal1 = function () {
    modal1.classList.add("hidden");
    overlay1.classList.add("hidden");
  };

openModalBtn1.addEventListener("click", openModal1);
overlay1.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
        modalClose();
    }
});

// MODAL-2

const modal2 = document.querySelector(".modal2");
const overlay2 = document.querySelector(".overlay2");
const openModalBtn2 = document.querySelector(".about-us");
const openModal2 = function () {
    modal2.classList.remove("hidden");
    overlay2.classList.remove("hidden");
};

const closeModal2 = function () {
    modal2.classList.add("hidden");
    overlay2.classList.add("hidden");
  };

openModalBtn2.addEventListener("click", openModal2);
overlay2.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
        modalClose();
    }
});