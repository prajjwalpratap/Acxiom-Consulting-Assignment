const loginForm = document.getElementById('loginForm');
const loginContainer = document.getElementById('loginContainer');
const dashboardContainer = document.getElementById('dashboardContainer');
const dashboardTitle = document.getElementById('dashboardTitle');
const menuOptions = document.getElementById('menuOptions');
const actionContainer = document.getElementById('actionContainer');

let role = '';

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  role = document.querySelector('input[name="role"]:checked').value;
  loginContainer.classList.add('hidden');
  dashboardContainer.classList.remove('hidden');
  dashboardTitle.textContent = `${role.toUpperCase()} DASHBOARD`;
  loadMenu(role);
});

function logout() {
  location.reload();
}

function loadMenu(role) {
  let options = '';
  switch (role) {
    case 'admin':
      options = `
        <button onclick="showAction('maintenance')">Maintenance Menu</button>
        <button onclick="showAction('addVendorMembership')">Add Vendor Membership</button>
        <button onclick="showAction('updateVendorMembership')">Update Vendor Membership</button>
      `;
      break;
    case 'vendor':
      options = `
        <button onclick="showAction('yourItem')">Your Item</button>
        <button onclick="showAction('addItem')">Add New Item</button>
        <button onclick="showAction('transaction')">Transaction</button>
      `;
      break;
    case 'user':
      options = `
        <button onclick="showAction('vendor')">Vendor</button>
        <button onclick="showAction('cart')">Cart</button>
        <button onclick="showAction('guestList')">Guest List</button>
        <button onclick="showAction('orderStatus')">Order Status</button>
      `;
      break;
  }
  menuOptions.innerHTML = options;
}

function showAction(action) {
  dashboardContainer.classList.add('hidden');
  actionContainer.classList.remove('hidden');

  const actions = {
    maintenance: `
      <h3>Admin - Maintenance</h3>
      <ul>
        <li>Add/Update Memberships</li>
        <li>Add/Update Users/Vendors</li>
        <li>User Management</li>
        <li>Vendor Management</li>
      </ul>
      <button onclick="goBack()">Back</button>
    `,
    addVendorMembership: `
      <h3>Add Membership for Vendor</h3>
      <form>
        <input type="text" placeholder="Vendor Name" required />
        <select>
          <option selected>6 months</option>
          <option>1 year</option>
          <option>2 years</option>
        </select>
        <button type="submit">Submit</button>
        <button onclick="goBack()">Cancel</button>
      </form>
    `,
    updateVendorMembership: `
      <h3>Update Vendor Membership</h3>
      <form>
        <input type="text" placeholder="Vendor ID" required />
        <select>
          <option selected>Extend 6 months</option>
          <option>Cancel Membership</option>
        </select>
        <button type="submit">Update</button>
        <button onclick="goBack()">Cancel</button>
      </form>
    `,
    yourItem: `
      <h3>Your Items</h3>
      <button>Insert</button>
      <button>Delete</button>
      <button onclick="goBack()">Back</button>
    `,
    addItem: `
      <h3>Add New Item</h3>
      <button>Product Status</button>
      <button>Request Item</button>
      <button>View Product</button>
      <button onclick="goBack()">Back</button>
    `,
    transaction: `
      <h3>Transaction</h3>
      <button>User Request</button>
      <button onclick="goBack()">Back</button>
    `,
    vendor: `
      <h3>Vendor View</h3>
      <p>Browse vendor information.</p>
      <button onclick="goBack()">Back</button>
    `,
    cart: `
      <h3>Cart</h3>
      <button>Payment</button>
      <button>Total Amount</button>
      <button>Cancel</button>
      <button onclick="goBack()">Back</button>
    `,
    guestList: `
      <h3>Guest List</h3>
      <button>Update</button>
      <button>Delete</button>
      <button onclick="goBack()">Back</button>
    `,
    orderStatus: `
      <h3>Order Status</h3>
      <button>Check Status</button>
      <button onclick="goBack()">Back</button>
    `
  };

  actionContainer.innerHTML = actions[action] || `<p>Invalid Option</p><button onclick="goBack()">Back</button>`;
}

function goBack() {
  actionContainer.classList.add('hidden');
  dashboardContainer.classList.remove('hidden');
}
