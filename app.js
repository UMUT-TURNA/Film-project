const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".film-list");

arrows.forEach((arrow, i) => {
  // Liste içindeki film sayısını alıyoruz
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    // Pencere genişliğine göre kaç öğenin sığacağını hesaplıyoruz
    const visibleItems = Math.floor(window.innerWidth / 270);
    
    clickCounter++;
    
    // Eğer kalan öğeler sağa kaydırılabilecekse
    if (itemNumber - (4 + clickCounter) + (4 - visibleItems) >= 0) {
      const currentTransformValue = movieLists[i].computedStyleMap().get("transform")[0].x.value;
      movieLists[i].style.transform = `translateX(${currentTransformValue - 300}px)`;
    } else {
      // Öğeler biterse başa dönecek şekilde sıfırla
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
