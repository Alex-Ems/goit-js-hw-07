import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imageMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
                <a class="gallery__link" href ="${original}" >
                    <img class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        /></a>
</div>`;
  })
  .join("");
galleryEl.insertAdjacentHTML("beforeend", imageMarkup);

galleryEl.addEventListener("click", onClickShowBigImg);
function onClickShowBigImg(event) {
  event.preventDefault();
  if (event.target.className !== "gallery__image") {
    return;
  }
  const markupBigImg = `<img src='${event.target.dataset.source}' width='800' height='600'>`;
  const instance = basicLightbox.create(markupBigImg, {
    onShow: () => document.addEventListener("keydown", onCloseModal),
    onClose: () => document.removeEventListener("keydown", onCloseModal),
  });
  instance.show();

  function onCloseModal(event) {
    if (event.code === "Escape") {
      console.log("esc");
      instance.close();
    }
  }
}
document.body.style.backgroundColor = "skyblue";
