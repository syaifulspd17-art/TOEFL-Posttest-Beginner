/* Settings for the TOEFL ITP test website (SMAN 1, 5 and 9 Pinrang).
   Pengaturan website. Ubah di sini jika perlu. */
window.TOEFL_CONFIG = {
  // School list shown to students, and which test each school takes.
  // Daftar sekolah dan tes yang dipakai tiap sekolah ('post' atau 'beginner').
  schools: {
    'SMAN 1 Pinrang': 'post',
    'SMAN 5 Pinrang': 'beginner',
    'SMAN 9 Pinrang': 'beginner'
  },

  tests: {
    // Longman Complete Course post-test → Google Sheet "TOEFL Posttest"
    post: {
      scriptUrl: 'https://script.google.com/macros/s/AKfycbwhpAt0i3WBtQEYfzEDZitRhYZMY_TSx-bacqmucd1aHt8KBQyMBKlfPupHsulp_HK5CA/exec',
      audio: 'listening-post.mp3'
    },
    // Longman Introductory Course post-test → Google Sheet "TOEFL POST TEST SMAN 5 dan 9 Pinrang"
    beginner: {
      scriptUrl: 'https://script.google.com/macros/s/AKfycbzNi57qQlFVWRAd1ksY1xP0zACxqT4yie1lvrwQtB1M-T_M5dk6LQs4oOH_Cpl45gpf/exec',
      audio: 'listening-beginner.mp3'
    }
  },

  // Section time limits in minutes (Waktu tiap bagian, dalam menit)
  minutes: { L: 35, S: 25, R: 55 },

  // Test title shown to students
  title: 'TOEFL ITP Post-Test',

  // Developer credit shown at the bottom of the pages
  credit: 'Developed by Syaiful, S.Pd., M.Ed.'
};
