const API_URL = "https://dummyjson.com/users?limit=100";

let employees = [];
let currentPage = 1;
let rowsPerPage = 20;
let sortKey = "";
let sortAsc = true;

const tableBody = document.querySelector("#employeeTable tbody");
const searchInput = document.getElementById("searchInput");
const rowsSelect = document.getElementById("rowsPerPage");
const paginationDiv = document.getElementById("pagination");
const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const employeeForm = document.getElementById("employeeForm");
const modalTitle = document.getElementById("modalTitle");

let editIndex = null;

// Fetch employees from API
fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        employees = data.users.map(user => ({
            name: `${user.firstName} ${user.lastName}`,
            id: user.id,
            position: user.company?.title || "Employee",
            office: user.address?.city || "Unknown",
            age: user.age,
            startDate: new Date(user.birthDate).toISOString().split("T")[0],
            salary: Math.floor(Math.random() * 5000) + 2000
        }));
        renderTable();
    })
    .catch(err => console.error("Error fetching API:", err));

// Render table
function renderTable() {
    let filtered = employees.filter(emp => {
        const term = searchInput.value.toLowerCase();
        return Object.values(emp).some(val =>
            String(val).toLowerCase().includes(term)
        );
    });

    // Sorting
    if(sortKey){
        filtered.sort((a,b)=>{
            let valA = a[sortKey];
            let valB = b[sortKey];
            if(typeof valA === 'string') return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
            if(sortKey==='startDate') return sortAsc ? new Date(valA)-new Date(valB) : new Date(valB)-new Date(valA);
            return sortAsc ? valA-valB : valB-valA;
        });
    }

    // Total Users
    const totalUsers = filtered.length;
    document.getElementById('totalUsers')?.remove();
    const totalDisplay = document.createElement('div');
    totalDisplay.id = 'totalUsers';
    totalDisplay.textContent = `Total Users: ${totalUsers}`;
    document.querySelector('.container').insertBefore(totalDisplay, tableBody.parentElement);

    // Pagination
    const start = (currentPage-1) * rowsPerPage;
    const end = start + parseInt(rowsPerPage);
    const paginated = filtered.slice(start,end);

    // Render rows
    tableBody.innerHTML = '';
    paginated.forEach((emp,index)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.id}</td>
            <td>${emp.position}</td>
            <td>${emp.office}</td>
            <td>${emp.age}</td>
            <td>${emp.startDate}</td>
            <td>${emp.salary}</td>
            <td>
                <button onclick="editEmployee(${employees.indexOf(emp)})">Edit</button>
                <button onclick="deleteEmployee(${employees.indexOf(emp)})">Delete</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    renderPagination(filtered.length);
}

// Pagination buttons
function renderPagination(total){
    const totalPages = Math.ceil(total / rowsPerPage);
    paginationDiv.innerHTML='';
    for(let i=1;i<=totalPages;i++){
        const btn = document.createElement('button');
        btn.textContent=i;
        if(i===currentPage) btn.classList.add('active');
        btn.addEventListener('click',()=>{currentPage=i; renderTable();});
        paginationDiv.appendChild(btn);
    }
}

// Search input
searchInput.addEventListener('input',()=>{
    currentPage=1;
    renderTable();
});

// Rows per page
rowsSelect.addEventListener('change',()=>{
    rowsPerPage = parseInt(rowsSelect.value);
    currentPage = 1;
    renderTable();
});

// Sorting
document.querySelectorAll("#employeeTable th[data-key]").forEach(th=>{
    th.addEventListener('click',()=>{
        const key = th.getAttribute('data-key');
        if(sortKey===key) sortAsc = !sortAsc;
        else { sortKey = key; sortAsc = true; }
        renderTable();
    });
});

// Modal - Add Employee
addBtn.addEventListener('click',()=>{
    modal.style.display='block';
    modalTitle.textContent='Add Employee';
    employeeForm.reset();
    editIndex = null;
});

// Close modal
closeModal.addEventListener('click',()=> modal.style.display='none');

// Add/Edit Employee Form
employeeForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData = new FormData(employeeForm);
    const empData = Object.fromEntries(formData.entries());

    if(editIndex!==null){
        employees[editIndex] = empData;
    } else {
        employees.push(empData);
    }
    modal.style.display='none';
    renderTable();
});

// Edit Employee
function editEmployee(index){
    editIndex = index;
    const emp = employees[index];
    modal.style.display='block';
    modalTitle.textContent='Edit Employee';
    for(const key in emp){
        if(employeeForm.elements[key]) employeeForm.elements[key].value = emp[key];
    }
}

// Delete Employee
function deleteEmployee(index){
    if(confirm("Are you sure you want to delete this employee?")){
        employees.splice(index,1);
        renderTable();
    }
}
