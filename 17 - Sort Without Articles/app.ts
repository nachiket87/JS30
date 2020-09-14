export {}
const bands: Array<string> = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function strip(bandName: string){
  return bandName.replace(/(^a |the |an )/i,'').trim();
}

const sortedBands: Array<string> = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

document.getElementById('bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

console.log(sortedBands);

