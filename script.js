// ==================== DATA FASILITATOR (70 Nama) ====================
const FASILITATOR_LIST = [
    "Koordinator Kota Muhammad Rajasa Danny Alamsyah, S.H.",
    "Koordinator Magelang Utara Ardy Hudhatama, S.Pd.",
    "Koordinator Magelang Tengah Enggar Saraswati, A.Md.Kep",
    "Koordinator Magelang Selatan Chandra Tribawono, S.Pd.",
    "Kramat Utara Ardian Dwi Chandra, S.M. (Koordinator)",
    "Kramat Utara Kharisma Putri Pertiwi, A.Md.T",
    "Kramat Selatan Nurul Afifa Dian Segari, S.P (Koordlnator)",
    "Kramat Selatan Febrian Agus Partomo, S.Sos.",
    "Kramat Selatan Haning Karunia Putra, A.Md.Ak.",
    "Kramat Selatan Aulia Trisna Agustin, S.H.",
    "Kedungsari Didik Subiyantoro, S.E. (Koordinator)",
    "Kedungsari Febriana Dewi Utami, S.H.",
    "Kedungsari Ida Kumia Kalpikaratri, S.Pd.",
    "Kedungsari Dhevi Arishandy, S.P.",
    "Wates Wreksaningrum Agung Prasetyawati Supiyo, S.Psi. (Koordinator)",
    "Wates Agung Dian Saputra, S.E.",
    "Wates Ghina Fauzia Rafidah, S.Pd.",
    "Wates Muchammad Fawaid Mubarok, S.Sos.",
    "Wates Andi Hendra Saputra Gaffar, A.Md.Kom",
    "Potrobangsan Dian Septi Virgiani, S.E (Koordinator)",
    "Potrobangsan Henry Arif Wahyudi, S. Kom",
    "Potrobangsan Muna Maajida Haryan Azhar, S.Ak",
    "Potrobangsan Daniel Anggraito, S.Kom.",
    "Magelang Novella Putri Prahardika, S.Si. (Koordinator)",
    "Magelang Priyo Widiatmoko, S.E.",
    "Magelang Rafidha Aliy Rachmani, S.M.",
    "Gelangan Dewi Utari Wahyuningtyas, S.S.T (Koordinator)",
    "Gelangan Ivan Adi Prabowo, S.P.",
    "Gelangan Nindhitya Mega Putri Syaharani, S.H",
    "Gelangan Anisa Tri Ambarwati, S.Pd.",
    "Panjang Priska Wijayanti, S.S. (Koordinator)",
    "Panjang Dewi Rosita, S.M.",
    "Panjang Dwi Sekar Novianingrum, S.Sos.",
    "Panjang Vicenco Putra Astono, S.Pd.",
    "Rejowinangun Utara Briliant Oliviera, S.Pd. (Koordinator)",
    "Rejowinangun Utara Denny Susila Andriyana, S.Pd.",
    "Rejowinangun Utara Refita Aqdwirida, S.Pd.",
    "Rejowinangun Utara Dhika Santi Apriliati, A.Md. Kep.",
    "Rejowinangun Utara Nur Alfian Farandhika, S.Pd.",
    "Rejowinangun Utara Usamah Abdul Hanif, S.E.",
    "Kemirirejo Nova Puspitasari, S.Psi. (Koordinator)",
    "Kemirirejo Herawan Gagah Widigdo, S.E.",
    "Kemirirejo Wiwit Nakhiyah, A.Md.Kep.",
    "Kemirirejo Deby Liany Sasongko, S.I.Kom.",
    "Cacaban Edo Aditya Putra, S.E. (Koordinator)",
    "Cacaban Dinda Ayu Rosa Loren, S.H.",
    "Cacaban Nita Agustin, A.Md.Stat.",
    "Cacaban Rhesa Albinhassan Philorona, S.E",
    "Cacaban Shafa Alika Tolti Mayvia, S.I.Kom.",
    "Magersari Siska Tiara Dewi, S.E (Koordinator)",
    "Magersari Laili Yustighfar F., S.E.",
    "Magersari Hayu Ambar PratiwiS.Sos.",
    "Magersari Nurul Hikmah, S.Kom.",
    "Magersari Syahriza Aldi Rois, S.E.",
    "Rejowinangun Selatan Avissa Tsurayya, S.H. (Koordinator)",
    "Rejowinangun Selatan Aditya Budi Setiawan, S. T.",
    "Rejowinangun Selatan Aura Mellenia lmani, A.Md.Ak.",
    "Rejowinangun Selatan Elifa Fenny Rahayu, S.M.",
    "Tidar Utara Eky Katharinella Kumiarum, S.E. (Koordinator)",
    "Tidar Utara Alivia Nurul Hikma, S.Sos",
    "Tidar Utara Eka DyahAstuti, S.Sos.",
    "Tidar Selatan Rizky Agung Pambudi, S.S. (Koordinator)",
    "Tidar Selatan Rina Mawarinda, S.Pd",
    "Tidar Selatan Yeni Nurul Utami, ST.",
    "Jurangombo Utara Zaenal Arifin, S.T. (Koordinator)",
    "Jurangombo Utara Wahyu Galih Saputra, S.H.",
    "Jurangombo Utara Lia Shabilla, S.Sos.",
    "Jurangombo Selatan Vega Sofle Kharisrma Putri, S.M. (Koordlnator)",
    "Jurangombo Selatan Clarisa Sasti Bintoro, S.E.",
    "Jurangombo Selatan Kalpataru Muda Fathlka, S.E."
];

// Storage keys
const STORAGE_SALDO = "kas_fasilitator_saldo";
const STORAGE_TRANSAKSI = "kas_fasilitator_transaksi";

// State
let saldoMap = new Map();
let transaksiMap = new Map(); // { nama: [transaksi] }
let transaksiList = []; // Flat list untuk riwayat

// Chart instances
let reportChart = null;
let trendChart = null;
let topChart = null;

// Helper functions
function formatRp(angka) {
    return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m]));
}

// ==================== DATA MANAGEMENT ====================
function initData() {
    const savedSaldo = localStorage.getItem(STORAGE_SALDO);
    const savedTransaksi = localStorage.getItem(STORAGE_TRANSAKSI);
    
    if (savedSaldo) {
        const parsed = JSON.parse(savedSaldo);
        saldoMap = new Map(parsed);
    } else {
        FASILITATOR_LIST.forEach(name => saldoMap.set(name, 0));
    }
    
    if (savedTransaksi) {
        const parsed = JSON.parse(savedTransaksi);
        transaksiMap = new Map(parsed);
        // Build flat list
        transaksiList = [];
        for (let [nama, list] of transaksiMap.entries()) {
            for (let t of list) {
                transaksiList.push({ ...t, nama });
            }
        }
    } else {
        FASILITATOR_LIST.forEach(name => transaksiMap.set(name, []));
        transaksiList = [];
    }
    
    // Ensure all facilitators exist
    for (let name of FASILITATOR_LIST) {
        if (!saldoMap.has(name)) saldoMap.set(name, 0);
        if (!transaksiMap.has(name)) transaksiMap.set(name, []);
    }
    
    persistData();
}

function persistData() {
    localStorage.setItem(STORAGE_SALDO, JSON.stringify([...saldoMap]));
    localStorage.setItem(STORAGE_TRANSAKSI, JSON.stringify([...transaksiMap]));
}

function addTransaction(nama, tipe, nominal, keterangan, bulan) {
    if (!nama || !FASILITATOR_LIST.includes(nama)) {
        alert("Fasilitator tidak valid!");
        return false;
    }
    if (isNaN(nominal) || nominal <= 0) {
        alert("Nominal harus lebih dari 0!");
        return false;
    }
    if (!bulan || !/^\d{4}-\d{2}$/.test(bulan)) {
        alert("Pilih bulan transaksi (YYYY-MM)");
        return false;
    }
    
    const nominalInt = Math.floor(Number(nominal));
    let saldoSekarang = saldoMap.get(nama) || 0;
    
    if (tipe === 'keluar' && saldoSekarang < nominalInt) {
        alert(`Saldo ${nama} tidak mencukupi! (Saldo: ${formatRp(saldoSekarang)})`);
        return false;
    }
    
    const newSaldo = tipe === 'masuk' ? saldoSekarang + nominalInt : saldoSekarang - nominalInt;
    saldoMap.set(nama, newSaldo);
    
    const newTrans = {
        id: Date.now() + Math.random() * 10000,
        tipe: tipe,
        nominal: nominalInt,
        keterangan: keterangan?.trim() || (tipe === 'masuk' ? 'Kas masuk' : 'Kas keluar'),
        bulan: bulan,
        timestamp: new Date().toISOString()
    };
    
    const riwayat = transaksiMap.get(nama) || [];
    riwayat.unshift(newTrans);
    transaksiMap.set(nama, riwayat);
    
    // Update flat list
    transaksiList.unshift({ ...newTrans, nama });
    
    persistData();
    return true;
}

function deleteTransaction(nama, transaksiId) {
    const riwayat = transaksiMap.get(nama) || [];
    const index = riwayat.findIndex(t => t.id == transaksiId);
    if (index === -1) return false;
    
    const trans = riwayat[index];
    let saldoNow = saldoMap.get(nama) || 0;
    
    if (trans.tipe === 'masuk') {
        saldoMap.set(nama, saldoNow - trans.nominal);
    } else {
        saldoMap.set(nama, saldoNow + trans.nominal);
    }
    
    riwayat.splice(index, 1);
    transaksiMap.set(nama, riwayat);
    
    // Update flat list
    const flatIndex = transaksiList.findIndex(t => t.id == transaksiId);
    if (flatIndex !== -1) transaksiList.splice(flatIndex, 1);
    
    persistData();
    return true;
}

function resetAllData() {
    if (confirm("⚠️ PERINGATAN: Semua data akan dihapus total!\n- Semua saldo menjadi Rp0\n- Semua riwayat transaksi dihapus\n\nLanjutkan?")) {
        for (let name of FASILITATOR_LIST) {
            saldoMap.set(name, 0);
            transaksiMap.set(name, []);
        }
        transaksiList = [];
        persistData();
        renderAll();
        updateBulanMultiSelect();
        alert("Semua data telah direset!");
    }
}

function clearHistoryOnly() {
    if (confirm("Hapus SEMUA riwayat transaksi? Saldo akan tetap sama.")) {
        for (let name of FASILITATOR_LIST) {
            transaksiMap.set(name, []);
        }
        transaksiList = [];
        persistData();
        renderAll();
        updateBulanMultiSelect();
        alert("Riwayat transaksi dihapus. Saldo tetap ada.");
    }
}

// ==================== RENDER FUNCTIONS ====================
function renderTabel(searchTerm = '') {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    let filteredNames = FASILITATOR_LIST;
    if (searchTerm) {
        filteredNames = FASILITATOR_LIST.filter(n => 
            n.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    filteredNames.forEach((nama, idx) => {
        const saldo = saldoMap.get(nama) || 0;
        const row = tbody.insertRow();
        row.insertCell(0).innerText = FASILITATOR_LIST.indexOf(nama) + 1;
        row.insertCell(1).innerHTML = `<span class="nama-fasilitator">${escapeHtml(nama)}</span>`;
        row.insertCell(2).innerHTML = `<span class="${saldo >= 0 ? 'saldo-positif' : 'saldo-negatif'}">${formatRp(saldo)}</span>`;
        const cell = row.insertCell(3);
        cell.innerHTML = `
            <button class="btn-mini btn-masuk" data-nama="${nama}" data-tipe="masuk">+ Masuk</button>
            <button class="btn-mini btn-keluar" data-nama="${nama}" data-tipe="keluar">- Keluar</button>
            <button class="btn-mini btn-history" data-nama="${nama}" data-action="history">📋 Riwayat</button>
        `;
    });
    
    // Attach event listeners
    document.querySelectorAll('.btn-masuk, .btn-keluar').forEach(btn => {
        btn.onclick = () => {
            const nama = btn.dataset.nama;
            const tipe = btn.dataset.tipe;
            const nominal = prompt(`Nominal (Rp) untuk ${tipe === 'masuk' ? 'KAS MASUK' : 'KAS KELUAR'} - ${nama}`, "10000");
            if (nominal && parseFloat(nominal) > 0) {
                const bulan = document.getElementById('bulanTransaksi').value;
                const ket = prompt("Keterangan:", "Iuran bulanan");
                if (addTransaction(nama, tipe, parseInt(nominal), ket, bulan)) {
                    renderAll();
                    updateBulanMultiSelect();
                }
            }
        };
    });
    
    document.querySelectorAll('.btn-history').forEach(btn => {
        btn.onclick = () => {
            const nama = btn.dataset.nama;
            showHistoryForFasilitator(nama);
        };
    });
}

function showHistoryForFasilitator(nama) {
    const trans = transaksiMap.get(nama) || [];
    if (trans.length === 0) {
        alert(`Belum ada transaksi untuk ${nama}`);
        return;
    }
    
    let msg = `📋 Riwayat Transaksi ${nama}:\n\n`;
    trans.slice(0, 20).forEach(t => {
        msg += `${t.tipe === 'masuk' ? '➕' : '➖'} ${formatRp(t.nominal)} - ${t.bulan} - ${t.keterangan}\n`;
    });
    if (trans.length > 20) msg += `\n...dan ${trans.length - 20} transaksi lainnya.`;
    alert(msg);
}

function renderStatistik() {
    let totalSaldo = 0, totalMasuk = 0, totalKeluar = 0;
    
    for (let t of transaksiList) {
        if (t.tipe === 'masuk') totalMasuk += t.nominal;
        else totalKeluar += t.nominal;
    }
    
    for (let saldo of saldoMap.values()) totalSaldo += saldo;
    
    document.getElementById('totalSaldo').innerHTML = formatRp(totalSaldo);
    document.getElementById('totalMasuk').innerHTML = formatRp(totalMasuk);
    document.getElementById('totalKeluar').innerHTML = formatRp(totalKeluar);
    document.getElementById('jumlahFasilitator').innerHTML = FASILITATOR_LIST.length;
}

function renderRiwayat() {
    const container = document.getElementById('riwayatList');
    if (transaksiList.length === 0) {
        container.innerHTML = '<div class="text-muted" style="padding: 20px; text-align:center;">✨ Belum ada transaksi. Silakan tambah kas.</div>';
        return;
    }
    
    const sorted = [...transaksiList].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 30);
    container.innerHTML = '';
    
    for (let t of sorted) {
        const div = document.createElement('div');
        div.className = 'riwayat-item';
        const badgeClass = t.tipe === 'masuk' ? 'badge-masuk' : 'badge-keluar';
        const badgeText = t.tipe === 'masuk' ? 'MASUK' : 'KELUAR';
        const dateObj = new Date(t.timestamp);
        const waktuStr = dateObj.toLocaleString('id-ID');
        
        div.innerHTML = `
            <div style="flex: 1;">
                <strong>${escapeHtml(t.nama)}</strong>
                <span class="badge ${badgeClass}">${badgeText}</span><br>
                ${formatRp(t.nominal)} | Bulan: ${t.bulan}<br>
                <span class="text-muted">${escapeHtml(t.keterangan)} • ${waktuStr}</span>
            </div>
            <button class="btn-mini btn-hapus-trans" data-nama="${t.nama}" data-id="${t.id}" style="background:#d1dbe6;">🗑 Hapus</button>
        `;
        container.appendChild(div);
    }
    
    document.querySelectorAll('.btn-hapus-trans').forEach(btn => {
        btn.onclick = () => {
            const nama = btn.dataset.nama;
            const id = parseInt(btn.dataset.id);
            if (confirm('Hapus transaksi ini? Saldo akan dikembalikan.')) {
                if (deleteTransaction(nama, id)) {
                    renderAll();
                    updateBulanMultiSelect();
                }
            }
        };
    });
}

function renderDropdown() {
    const select = document.getElementById('namaSelect');
    select.innerHTML = '';
    FASILITATOR_LIST.forEach(nama => {
        const opt = document.createElement('option');
        opt.value = nama;
        opt.textContent = nama;
        select.appendChild(opt);
    });
}

// ==================== MULTI BULAN REPORT ====================
function updateBulanMultiSelect() {
    const bulanSet = new Set();
    for (let t of transaksiList) {
        if (t.bulan) bulanSet.add(t.bulan);
    }
    if (bulanSet.size === 0) {
        bulanSet.add(new Date().toISOString().slice(0, 7));
        const prevMonth = new Date();
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        bulanSet.add(prevMonth.toISOString().slice(0, 7));
    }
    
    const select = document.getElementById('bulanMultiSelect');
    select.innerHTML = '';
    Array.from(bulanSet).sort().reverse().forEach(bulan => {
        const option = document.createElement('option');
        option.value = bulan;
        option.textContent = bulan;
        select.appendChild(option);
    });
}

function getRekapForBulans(selectedBulans) {
    const result = [];
    for (let nama of FASILITATOR_LIST) {
        let totalMasuk = 0, totalKeluar = 0;
        const transList = transaksiMap.get(nama) || [];
        for (let t of transList) {
            if (selectedBulans.includes(t.bulan)) {
                if (t.tipe === 'masuk') totalMasuk += t.nominal;
                else totalKeluar += t.nominal;
            }
        }
        const selisih = totalMasuk - totalKeluar;
        const sudahIuran = selectedBulans.some(bulan => 
            transList.some(t => t.tipe === 'masuk' && t.bulan === bulan)
        );
        if (totalMasuk !== 0 || totalKeluar !== 0) {
            result.push({ nama, totalMasuk, totalKeluar, selisih, sudahIuran });
        }
    }
    return result.sort((a, b) => a.nama.localeCompare(b.nama));
}

function viewReport() {
    const multiSelect = document.getElementById('bulanMultiSelect');
    const selectedBulans = Array.from(multiSelect.selectedOptions).map(opt => opt.value);
    
    if (selectedBulans.length === 0) {
        document.getElementById('reportResult').innerHTML = '<div class="text-muted">⚠️ Pilih minimal 1 bulan (Ctrl+Click untuk multi select)</div>';
        return;
    }
    
    const rekap = getRekapForBulans(selectedBulans);
    
    let html = `<h4>📊 Laporan Multi Bulan: ${selectedBulans.join(', ')}</h4>
                <table style="width:100%">
                    <thead>
                        <tr><th>No</th><th>Nama Fasilitator</th><th>Total Masuk (Rp)</th><th>Total Keluar (Rp)</th><th>Selisih (Rp)</th><th>Status</th></tr>
                    </thead>
                    <tbody>`;
    
    let totalMasuk = 0, totalKeluar = 0;
    rekap.forEach((r, idx) => {
        const statusClass = r.sudahIuran ? 'sudah-iuran' : 'belum-iuran';
        const statusText = r.sudahIuran ? '<span class="badge-sudah">✓ Sudah Iuran</span>' : '<span class="badge-belum">⚠️ Belum Iuran</span>';
        html += `<tr class="${statusClass}">
                     <td>${idx + 1}</td>
                     <td>${escapeHtml(r.nama)}</td>
                     <td>${formatRp(r.totalMasuk)}</td>
                     <td>${formatRp(r.totalKeluar)}</td>
                     <td class="${r.selisih >= 0 ? 'saldo-positif' : 'saldo-negatif'}">${formatRp(r.selisih)}</td>
                     <td>${statusText}</td>
                 </tr>`;
        totalMasuk += r.totalMasuk;
        totalKeluar += r.totalKeluar;
    });
    
    const belumIuran = rekap.filter(r => !r.sudahIuran).length;
    html += `<tr class="total-row">
                 <td colspan="2"><strong>TOTAL</strong></td>
                 <td><strong>${formatRp(totalMasuk)}</strong></td>
                 <td><strong>${formatRp(totalKeluar)}</strong></td>
                 <td><strong>${formatRp(totalMasuk - totalKeluar)}</strong></td>
                 <td><strong>Belum Iuran: ${belumIuran} org</strong></td>
             </tr>`;
    html += `</tbody></table>`;
    
    document.getElementById('reportResult').innerHTML = html;
    
    // Update chart
    updateReportChart(rekap);
}

function updateReportChart(rekap) {
    const ctx = document.getElementById('reportChart').getContext('2d');
    const topData = rekap.slice(0, 15);
    const labels = topData.map(r => r.nama.substring(0, 25));
    const masukData = topData.map(r => r.totalMasuk);
    const keluarData = topData.map(r => r.totalKeluar);
    
    if (reportChart) reportChart.destroy();
    reportChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                { label: 'Kas Masuk', data: masukData, backgroundColor: '#2b7e4a', borderRadius: 8 },
                { label: 'Kas Keluar', data: keluarData, backgroundColor: '#b45353', borderRadius: 8 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Top 15 Fasilitator' }
            }
        }
    });
}

// ==================== TREND CHART ====================
function getMonthlyTrend(year) {
    const monthly = {};
    for (let i = 1; i <= 12; i++) {
        const bulan = `${year}-${String(i).padStart(2, '0')}`;
        monthly[i] = { masuk: 0, keluar: 0 };
    }
    
    for (let t of transaksiList) {
        if (t.bulan && t.bulan.startsWith(year)) {
            const month = parseInt(t.bulan.slice(5, 7));
            if (t.tipe === 'masuk') monthly[month].masuk += t.nominal;
            else monthly[month].keluar += t.nominal;
        }
    }
    return monthly;
}

function updateTrendChart() {
    const year = document.getElementById('trendYear').value;
    const monthly = getMonthlyTrend(year);
    
    const ctx = document.getElementById('trendChart').getContext('2d');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
    const masukData = months.map((_, i) => monthly[i + 1]?.masuk || 0);
    const keluarData = months.map((_, i) => monthly[i + 1]?.keluar || 0);
    
    if (trendChart) trendChart.destroy();
    trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                { label: 'Kas Masuk', data: masukData, borderColor: '#2b7e4a', backgroundColor: 'rgba(43,126,74,0.1)', fill: true, tension: 0.3 },
                { label: 'Kas Keluar', data: keluarData, borderColor: '#b45353', backgroundColor: 'rgba(180,83,83,0.1)', fill: true, tension: 0.3 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: `Trend Kas Tahun ${year}` }
            }
        }
    });
}

function updateYearOptions() {
    const yearSet = new Set();
    for (let t of transaksiList) {
        if (t.bulan) yearSet.add(t.bulan.slice(0, 4));
    }
    if (yearSet.size === 0) yearSet.add(new Date().getFullYear().toString());
    
    const select = document.getElementById('trendYear');
    select.innerHTML = '';
    Array.from(yearSet).sort().reverse().forEach(y => {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        select.appendChild(opt);
    });
}

// ==================== TOP FASILITATOR CHART ====================
function updateTopChart() {
    const ctx = document.getElementById('topChart').getContext('2d');
    const totals = [];
    for (let nama of FASILITATOR_LIST) {
        let total = 0;
        const trans = transaksiMap.get(nama) || [];
        for (let t of trans) {
            if (t.tipe === 'masuk') total += t.nominal;
        }
        if (total > 0) totals.push({ nama, total });
    }
    const top10 = totals.sort((a, b) => b.total - a.total).slice(0, 10);
    const labels = top10.map(t => t.nama.substring(0, 30));
    const data = top10.map(t => t.total);
    
    if (topChart) topChart.destroy();
    topChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{ label: 'Total Iuran (Rp)', data: data, backgroundColor: '#1f6e8c', borderRadius: 8 }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: { legend: { position: 'top' }, title: { display: true, text: 'Top 10 Fasilitator Berdasarkan Total Iuran' } },
            indexAxis: 'y'
        }
    });
}

// ==================== EXPORT FUNCTIONS ====================
function exportReportCSV() {
    const multiSelect = document.getElementById('bulanMultiSelect');
    const selectedBulans = Array.from(multiSelect.selectedOptions).map(opt => opt.value);
    if (selectedBulans.length === 0) {
        alert("Pilih bulan terlebih dahulu!");
        return;
    }
    
    const rekap = getRekapForBulans(selectedBulans);
    const rows = [["No", "Nama Fasilitator", "Total Masuk (Rp)", "Total Keluar (Rp)", "Selisih (Rp)", "Status"]];
    rekap.forEach((r, idx) => {
        rows.push([idx + 1, r.nama, r.totalMasuk, r.totalKeluar, r.selisih, r.sudahIuran ? "Sudah Iuran" : "Belum Iuran"]);
    });
    let totalMasuk = rekap.reduce((a, b) => a + b.totalMasuk, 0);
    let totalKeluar = rekap.reduce((a, b) => a + b.totalKeluar, 0);
    rows.push(["", "TOTAL", totalMasuk, totalKeluar, totalMasuk - totalKeluar, ""]);
    
    const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    downloadCSV(csv, `laporan_kas_${selectedBulans.join('_')}.csv`);
}

function exportHistoryCSV() {
    const rows = [["ID", "Tanggal", "Nama", "Tipe", "Nominal", "Keterangan", "Bulan"]];
    const sorted = [...transaksiList].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    sorted.forEach(t => {
        rows.push([t.id, t.timestamp, t.nama, t.tipe === 'masuk' ? 'Kas Masuk' : 'Kas Keluar', t.nominal, t.keterangan, t.bulan]);
    });
    const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    downloadCSV(csv, `riwayat_transaksi_${new Date().toISOString().slice(0, 10)}.csv`);
}

function exportTrendCSV() {
    const year = document.getElementById('trendYear').value;
    const monthly = getMonthlyTrend(year);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
    const rows = [["Bulan", "Kas Masuk (Rp)", "Kas Keluar (Rp)", "Selisih (Rp)"]];
    months.forEach((m, i) => {
        const masuk = monthly[i + 1]?.masuk || 0;
        const keluar = monthly[i + 1]?.keluar || 0;
        rows.push([m, masuk, keluar, masuk - keluar]);
    });
    const csv = rows.map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
    downloadCSV(csv, `trend_kas_${year}.csv`);
}

function downloadCSV(csv, filename) {
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    alert(`File ${filename} berhasil diunduh!`);
}

function printReport() {
    const reportContent = document.getElementById('reportResult').innerHTML;
    if (!reportContent || reportContent.includes('Pilih minimal')) {
        alert("Tampilkan rekapan terlebih dahulu!");
        return;
    }
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html><head><title>Laporan Kas Fasilitator</title>
        <style>body { font-family: Arial, sans-serif; padding: 20px; } table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid #ccc; padding: 8px; text-align: left; } </style>
        </head><body>${reportContent}</body></html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// ==================== RENDER ALL ====================
function renderAll() {
    renderDropdown();
    renderTabel(document.getElementById('searchFasilitator')?.value || '');
    renderStatistik();
    renderRiwayat();
    updateYearOptions();
    updateTrendChart();
    updateTopChart();
}

// ==================== EVENT LISTENERS ====================
function bindEvents() {
    document.getElementById('btnKasMasuk').onclick = () => {
        const nama = document.getElementById('namaSelect').value;
        const nominal = parseInt(document.getElementById('nominalInput').value);
        const ket = document.getElementById('keteranganInput').value;
        const bulan = document.getElementById('bulanTransaksi').value;
        if (addTransaction(nama, 'masuk', nominal, ket, bulan)) {
            renderAll();
            updateBulanMultiSelect();
            document.getElementById('keteranganInput').value = '';
        }
    };
    
    document.getElementById('btnKasKeluar').onclick = () => {
        const nama = document.getElementById('namaSelect').value;
        const nominal = parseInt(document.getElementById('nominalInput').value);
        const ket = document.getElementById('keteranganInput').value;
        const bulan = document.getElementById('bulanTransaksi').value;
        if (addTransaction(nama, 'keluar', nominal, ket, bulan)) {
            renderAll();
            updateBulanMultiSelect();
            document.getElementById('keteranganInput').value = '';
        }
    };
    
    document.querySelectorAll('.btn-nominal').forEach(btn => {
        btn.onclick = () => {
            document.getElementById('nominalInput').value = btn.getAttribute('data-nom');
        };
    });
    
    document.getElementById('viewReportBtn').onclick = viewReport;
    document.getElementById('printReportBtn').onclick = printReport;
    document.getElementById('exportReportBtn').onclick = exportReportCSV;
    document.getElementById('clearHistoryBtn').onclick = clearHistoryOnly;
    document.getElementById('exportHistoryBtn').onclick = exportHistoryCSV;
    document.getElementById('resetDataBtn').onclick = resetAllData;
    document.getElementById('refreshTrendBtn').onclick = updateTrendChart;
    document.getElementById('exportTrendBtn').onclick = exportTrendCSV;
    document.getElementById('selectAllBulan').onclick = () => {
        const select = document.getElementById('bulanMultiSelect');
        for (let opt of select.options) opt.selected = true;
        viewReport();
    };
    document.getElementById('clearBulan').onclick = () => {
        const select = document.getElementById('bulanMultiSelect');
        for (let opt of select.options) opt.selected = false;
        document.getElementById('reportResult').innerHTML = '<div class="text-muted">Pilih bulan dan klik "Tampilkan Rekapan"</div>';
        if (reportChart) reportChart.destroy();
    };
    
    document.getElementById('searchFasilitator').oninput = (e) => {
        renderTabel(e.target.value);
    };
    
    document.getElementById('bulanTransaksi').value = new Date().toISOString().slice(0, 7);
}

// ==================== INIT ====================
initData();
bindEvents();
renderAll();
updateBulanMultiSelect();
viewReport();
