const scheduleData = [
    { no: 1, kode: "ILK3102", matkul: "Etika Profesi", sks: 2, semester: 5, kelas: "A", tipe: "Reguler", ruangan: "D-104", jadwal: "Thusrday, 08:00 - 09:40", dosen: "Dr. Ir. Elviawaty Muisa Zamzami S.T., M.T., M.M., IPU<br>Dr. Eng Ade Candra S.T., M.Kom." },
    { no: 2, kode: "ILK2108", matkul: "Wirausaha Digital", sks: 2, semester: 3, kelas: "A", tipe: "Reguler", ruangan: "D-104", jadwal: "Friday, 08:00 - 09:40", dosen: "Dr. T. Henny Febriana Harumy S.Kom., M.Kom<br>Dr. Fauzan Nurahmadi S.Kom., M.Cs" },
    { no: 3, kode: "ILK2104", matkul: "Basis Data", sks: 3, semester: 3, kelas: "A", tipe: "Reguler", ruangan: "D-103", jadwal: "Wednesday, 14:40 - 17:10", dosen: "Dr. Dewi Sartika Br Ginting S.Kom., M.Kom<br>Insidini Fawwaz M.Kom" },
    { no: 4, kode: "ILK2105", matkul: "Praktikum Basis Data", sks: 1, semester: 3, kelas: "A", tipe: "Reguler", ruangan: "Lab 2", jadwal: "Monday, 08:30 - 10:30", dosen: "Insidini Fawwaz M.Kom" },
    { no: 5, kode: "ILK2109", matkul: "Struktur Data", sks: 3, semester: 3, kelas: "A", tipe: "Reguler", ruangan: "D-101", jadwal: "Friday, 13:50 - 16:20", dosen: "Anandhini Mediarty Nababan S.Kom., M.T<br>Insidini Fawwaz M.Kom" },
    { no: 6, kode: "ILK2110", matkul: "Praktikum Struktur Data", sks: 1, semester: 3, kelas: "A", tipe: "Reguler", ruangan: "Lab 1", jadwal: "Thurday, 13:00 - 14:40", dosen: "Insidini Fawwaz M.Kom" },
    { no: 7, kode: "ILK2107", matkul: "Praktikum Pemrograman Web", sks: 1, semester: 3, kelas: "A", tipe: "Reguler", ruangan: "Lab 1", jadwal: "Monday, 10:30 - 12:10", dosen: "Dewi Sartika Br Ginting S.Kom., M.Kom" },
    { no: 8, kode: "ILK2106", matkul: "Pemrograman Web", sks: 3, semester: 3, kelas: "A", tipe: "Reguler", ruangan: "D-103", jadwal: "wednesday, 08:00 - 10:30", dosen: "Dr. Dewi Sartika Br Ginting S.Kom., M.Kom<br>Nurrahmadayeni M.Kom" },
    { no: 9, kode: "ILK3107", matkul: "Kecerdasan Buatan", sks: 3, semester: 5, kelas: "A", tipe: "Reguler", ruangan: "D-104", jadwal: "Tuesday, 13:50 - 16:20", dosen: "Dr. Amalia S.T., M.T.<br>Dr. Pauzi Ibrahim Nainggolan S.Komp., M.Sc." },
    { no: 10, kode: "KOM1103", matkul: "Keterampilan Berkomunikasi 1 (Reading and Listening Skill)", sks: 3, semester: "-", kelas: "KOM4", tipe: "MKWU", ruangan: "2.5", jadwal: "Tuesday, 08:00 - 10:30", dosen: "Dr. Emilia Ramadhani S. Sos, M.A<br>Angga Tinova Yudha M.I.Kom" },
    { no: 11, kode: "SAE3108", matkul: "IELTS Preparation", sks: 2, semester: "-", kelas: "PIK F", tipe: "MKWU", ruangan: "D-101", jadwal: "Tuesday, 10:30 - 12:10", dosen: "Drs. Yulianus Harefa GradDipEd TESOL., MEd TESOL" }
];

function renderSchedule() {
    const tbody = document.getElementById("scheduleBody");
    tbody.innerHTML = "";

    scheduleData.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${item.no}</td>
          <td>${item.kode}</td>
          <td>${item.matkul}</td>
          <td>${item.sks}</td>
          <td>${item.semester}</td>
          <td>${item.kelas}</td>
          <td>${item.tipe}</td>
          <td>${item.ruangan}</td>
          <td>${item.jadwal}</td>
          <td>${item.dosen}</td>
        `;
        tbody.appendChild(tr);
    });
}

window.addEventListener("DOMContentLoaded", renderSchedule);