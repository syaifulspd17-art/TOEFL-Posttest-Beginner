/* Settings for the TOEFL ITP Beginner Test website.
   Pengaturan website. Ubah di sini jika perlu. */
window.TOEFL_CONFIG = {
  // Google Apps Script web app URL (berakhiran /exec) — diisi setelah Sheet baru dibuat
  scriptUrl: 'https://script.google.com/macros/s/AKfycbzNi57qQlFVWRAd1ksY1xP0zACxqT4yie1lvrwQtB1M-T_M5dk6LQs4oOH_Cpl45gpf/exec',

  // Schools students can choose. Must match SCHOOLS in Code.gs exactly.
  schools: ['SMAN 5 Pinrang', 'SMAN 9 Pinrang'],

  // Section time limits in minutes (Waktu tiap bagian, dalam menit)
  minutes: { L: 35, S: 25, R: 55 },

  // Listening audio file
  audio: 'listening.mp3',

  // Test title shown to students
  title: 'TOEFL ITP Practice Test',

  // Developer credit shown at the bottom of the pages
  credit: 'Developed by Syaiful, S.Pd., M.Ed.'
};
