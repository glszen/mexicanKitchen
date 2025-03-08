const sections = {
  nachos: ["nachos", "nachos2", "nachos3", "back2"],
  tacos: ["tacos", "tacos2", "tacos3", "tacos4", "back"],
  burritos: ["burrito", "burrito1", "burrito2", "burrito3", "back3"],
  quessa: ["quessa", "quessa1", "quessa2", "back4"],
  home: ["home", "home2", "home3", "homediv", "home4"] // Ana sayfa öğeleri
};

// Toggle fonksiyonu
function toggleSection(section) {
  // Tüm öğeleri gizle
  Object.keys(sections).forEach((key) => {
    const sectionIds = sections[key];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.display = "none"; // Tüm öğeleri gizle
      }
    });
  });

  // Seçilen bölümdeki öğeleri göster
  const sectionIds = sections[section];
  sectionIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = "block"; // İlgili öğeleri göster
    }
  });
}

// Buton tıklamaları ile ilgili fonksiyonlar
function nachosButton() {
  toggleSection("nachos"); // Nachos ile ilgili öğeleri göster
}

function tacosButton() {
  toggleSection("tacos"); // Tacos ile ilgili öğeleri göster
}

function burritosButton() {
  toggleSection("burritos"); // Burritos ile ilgili öğeleri göster
}

function quessaButton() {
  toggleSection("quessa"); // Quessa ile ilgili öğeleri göster
}

// "Back" butonu tıklandığında ana sayfaya dönme işlemi
function backHome() {
  toggleSection("home"); // Ana sayfayı göster
}
