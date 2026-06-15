const API_URL = "https://example.com/api/order";
const DELIVERED_STATUS = "Delivered";

async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrder(orderId, token);
        showOrderModal(order, token);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function getOrder(orderId, token) {
    const response = await fetch(`${API_URL}/${orderId}`, {
        headers: {
            Authorization: token
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch order details");
    }

    return response.json();
}

function showOrderModal(order, token) {
    const modal = document.getElementById("orderModal");
    const detailsDiv = modal.querySelector("#orderDetails");

    renderOrderDetails(detailsDiv, order);
    setupCloseButton(modal);
    setupConfirmButton(modal, order, token);

    modal.style.display = "block";
}

function renderOrderDetails(container, order) {
    container.innerHTML = "";

    const header = document.createElement("h3");
    header.textContent = `Order ID: ${order.id}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${order.status}`;

    container.appendChild(header);
    container.appendChild(status);
}

function setupCloseButton(modal) {
    const closeBtn = modal.querySelector(".close");

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };
}

function setupConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector("#confirmOrderBtn");

    if (order.status === DELIVERED_STATUS) {
        confirmBtn.style.display = "none";
        return;
    }

    confirmBtn.style.display = "block";
    confirmBtn.onclick = () => {
        confirmOrder(order.id, token);
    };
}