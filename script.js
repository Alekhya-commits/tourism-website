const sectionIds = [
  'sectionHome',
  'sectionFavouritePlaces',
  'sectionTajMahalDetailedView',
  'sectionGoldenTempleDetailedView',
  'sectionMysourePalaceDetailedView',
  'sectionVaranasiDetailedView'
];

function display(sectionId) {
  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    section.style.display = id === sectionId ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => display('sectionHome'));
