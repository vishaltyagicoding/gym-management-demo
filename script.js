// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const sidebar = document.getElementById('sidebar');
const mobileToggle = document.getElementById('mobile-toggle');

// Create overlay
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

function openSidebar() {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-section');

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        if (window.innerWidth <= 1024) {
            closeSidebar();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

mobileToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

overlay.addEventListener('click', closeSidebar);

// Member Data
const members = [
  { name: 'Rahul Sharma', membership: 'Premium', joinDate: '2024-01-15', expiryDate: '2026-06-12', status: 'Active' },
  { name: 'Amit Singh', membership: 'Standard', joinDate: '2024-03-10', expiryDate: '2026-06-11', status: 'Active' },
  { name: 'Priya Patel', membership: 'Premium', joinDate: '2024-02-20', expiryDate: '2026-07-20', status: 'Active' },
  { name: 'Vikram Rao', membership: 'Basic', joinDate: '2024-05-05', expiryDate: '2026-08-15', status: 'Active' },
  { name: 'Neha Gupta', membership: 'Premium', joinDate: '2024-01-28', expiryDate: '2026-06-25', status: 'Active' },
  { name: 'Arjun Kumar', membership: 'Standard', joinDate: '2024-04-12', expiryDate: '2026-09-10', status: 'Active' },
  { name: 'Sanya Mishra', membership: 'Premium', joinDate: '2024-06-01', expiryDate: '2026-12-01', status: 'Active' },
  { name: 'Karan Shah', membership: 'Basic', joinDate: '2024-07-15', expiryDate: '2026-07-15', status: 'Active' },
  { name: 'Ananya Desai', membership: 'Premium', joinDate: '2024-08-20', expiryDate: '2026-08-20', status: 'Active' },
  { name: 'Rohit Mehta', membership: 'Standard', joinDate: '2024-09-05', expiryDate: '2026-09-05', status: 'Active' },
  { name: 'Divya Nair', membership: 'Premium', joinDate: '2024-10-10', expiryDate: '2026-10-10', status: 'Active' },
  { name: 'Suresh Iyer', membership: 'Basic', joinDate: '2024-11-15', expiryDate: '2026-11-15', status: 'Active' },
  { name: 'Pooja Reddy', membership: 'Standard', joinDate: '2024-12-01', expiryDate: '2026-12-01', status: 'Active' },
  { name: 'Manoj Verma', membership: 'Premium', joinDate: '2025-01-10', expiryDate: '2027-01-10', status: 'Active' },
  { name: 'Kavita Joshi', membership: 'Basic', joinDate: '2025-02-14', expiryDate: '2027-02-14', status: 'Active' }
];

function renderMembers() {
  const tbody = document.getElementById('members-table-body');
  if (!tbody) return;

  tbody.innerHTML = members.map((m, index) => {
    const expiry = new Date(m.expiryDate);
    const today = new Date('2026-06-10');
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let statusClass = 'status-active';
    let statusText = m.status;

    if (diffDays <= 0) {
        statusClass = 'status-expired';
        statusText = 'Expired';
    } else if (diffDays <= 7) {
        statusClass = 'status-pending';
        statusText = 'Expiring Soon';
    }

    return `
      <tr style="animation: fadeIn 0.3s ease ${index * 0.05}s both;">
        <td>
            <div style="display:flex; align-items:center; gap:12px;">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=random&color=fff&size=32" style="border-radius:8px; width:32px; height:32px;" alt="">
                <span>${m.name}</span>
            </div>
        </td>
        <td>${m.membership}</td>
        <td>${m.joinDate}</td>
        <td>${m.expiryDate}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td>
            <div class="action-btns">
                <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                <button class="action-btn" title="Delete"><i class="fas fa-trash"></i></button>
            </div>
        </td>
      </tr>
    `;
  }).join('');
}

renderMembers();

// Payments Data
const payments = [
  { member: 'Rahul Sharma', amount: '2,500', date: '2026-06-01', status: 'Paid' },
  { member: 'Priya Patel', amount: '4,000', date: '2026-06-02', status: 'Paid' },
  { member: 'Vikram Rao', amount: '1,500', date: '2026-06-03', status: 'Paid' },
  { member: 'Neha Gupta', amount: '4,000', date: '2026-06-05', status: 'Pending' },
  { member: 'Arjun Kumar', amount: '2,500', date: '2026-06-06', status: 'Paid' },
  { member: 'Sanya Mishra', amount: '4,000', date: '2026-06-07', status: 'Paid' },
  { member: 'Ananya Desai', amount: '4,000', date: '2026-06-08', status: 'Paid' },
  { member: 'Rohit Mehta', amount: '2,500', date: '2026-06-09', status: 'Pending' }
];

function renderPayments() {
  const tbody = document.getElementById('payments-table-body');
  if (!tbody) return;

  tbody.innerHTML = payments.map((p, index) => {
    const statusClass = p.status === 'Paid' ? 'status-active' : 'status-pending';
    return `
      <tr style="animation: fadeIn 0.3s ease ${index * 0.05}s both;">
        <td>${p.member}</td>
        <td><strong>₹${p.amount}</strong></td>
        <td>${p.date}</td>
        <td><span class="status-badge ${statusClass}">${p.status}</span></td>
        <td>
            <div class="action-btns">
                <button class="action-btn" title="View"><i class="fas fa-eye"></i></button>
                <button class="action-btn" title="Receipt"><i class="fas fa-receipt"></i></button>
            </div>
        </td>
      </tr>
    `;
  }).join('');
}

renderPayments();

// Dashboard Recent Data
function renderDashboardRecent() {
    const recentMembers = document.getElementById('recent-members-body');
    const recentPayments = document.getElementById('recent-payments-body');

    if (recentMembers) {
        recentMembers.innerHTML = members.slice(0, 5).map(m => {
            let statusClass = 'status-active';
            let statusText = 'Active';
            if (m.name === 'Rahul Sharma' || m.name === 'Amit Singh') {
                statusClass = 'status-pending';
                statusText = 'Expiring';
            }
            return `
                <tr>
                    <td>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=random&color=fff&size=28" style="border-radius:6px; width:28px; height:28px;" alt="">
                            ${m.name}
                        </div>
                    </td>
                    <td>${m.membership}</td>
                    <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                </tr>
            `;
        }).join('');
    }

    if (recentPayments) {
        recentPayments.innerHTML = payments.slice(0, 5).map(p => {
            const statusClass = p.status === 'Paid' ? 'status-active' : 'status-pending';
            return `
                <tr>
                    <td>${p.member}</td>
                    <td>₹${p.amount}</td>
                    <td><span class="status-badge ${statusClass}">${p.status}</span></td>
                </tr>
            `;
        }).join('');
    }
}

renderDashboardRecent();

// Chart Defaults
const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94a3b8', font: { family: 'Inter', size: 12 } }
        },
        x: {
            grid: { display: false },
            ticks: { color: '#94a3b8', font: { family: 'Inter', size: 12 } }
        }
    }
};

// Revenue Chart
const revenueCtx = document.getElementById('revenueChart');
if (revenueCtx) {
    const rCtx = revenueCtx.getContext('2d');
    const revenueGradient = rCtx.createLinearGradient(0, 0, 0, 300);
    revenueGradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
    revenueGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

    new Chart(rCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue (₹)',
                data: [65000, 72000, 68000, 85000, 79000, 87500],
                borderColor: '#8b5cf6',
                backgroundColor: revenueGradient,
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: chartDefaults
    });
}

// Growth Chart
const growthCtx = document.getElementById('growthChart');
if (growthCtx) {
    new Chart(growthCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'New Members',
                data: [18, 22, 15, 28, 20, 25],
                backgroundColor: [
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(59, 130, 246, 0.8)'
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: chartDefaults
    });
}

// Report Charts
const reportRevenueCtx = document.getElementById('reportRevenueChart');
if (reportRevenueCtx) {
    const rCtx = reportRevenueCtx.getContext('2d');
    const grad = rCtx.createLinearGradient(0, 0, 0, 300);
    grad.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
    grad.addColorStop(1, 'rgba(59, 130, 246, 0)');

    new Chart(rCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [42000, 48000, 51000, 62000, 78000, 87500],
                borderColor: '#3b82f6',
                backgroundColor: grad,
                fill: true,
                tension: 0.4,
                borderWidth: 3
            }]
        },
        options: chartDefaults
    });
}

const reportMembersCtx = document.getElementById('reportMembersChart');
if (reportMembersCtx) {
    new Chart(reportMembersCtx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Active Members',
                data: [120, 142, 155, 168, 178, 186],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 3
            }]
        },
        options: chartDefaults
    });
}

// Calendar generation
function generateCalendar() {
    const calendar = document.getElementById('attendance-calendar');
    if (!calendar) return;

    const daysInMonth = 30;
    const firstDay = 2; // Tuesday for June 2026

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        calendar.appendChild(empty);
    }

    const attendedDays = [1, 2, 3, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 19, 20, 22, 23, 24, 26, 27, 29, 30];

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        cell.textContent = day;
        if (attendedDays.includes(day)) {
            cell.classList.add('attended');
        }
        cell.addEventListener('click', () => {
            cell.style.transform = 'scale(0.95)';
            setTimeout(() => cell.style.transform = '', 150);
        });
        calendar.appendChild(cell);
    }
}

generateCalendar();

// Notifications
function toggleNotifications() {
    const dropdown = document.getElementById('notification-dropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.notification-wrapper')) {
        const dropdown = document.getElementById('notification-dropdown');
        if (dropdown) dropdown.classList.remove('show');
    }
});

// Search functionality
const searchInputs = document.querySelectorAll('.search-bar input');
searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const container = e.target.closest('.table-container');
        if (!container) return;
        const table = container.querySelector('.data-table tbody');
        if (!table) return;

        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(term) ? '' : 'none';
        });
    });
});

// Smooth entrance
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeSidebar();
    }
});