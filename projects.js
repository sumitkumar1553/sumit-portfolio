// Project image slider

const projectData = {
    hospital: {
        imageId: "hospitalImage",
        counterId: "hospitalCounter",
        currentIndex: 0,
        images: [
            "Images/Hospital_Analysis_Projects/Home_Dashboard (1).png",
            "Images/Hospital_Analysis_Projects/Overview_Dashboard (2).png",
            "Images/Hospital_Analysis_Projects/Patient_Dashboard (3).png",
            "Images/Hospital_Analysis_Projects/Doctor_Dashboard (4).png",
            "Images/Hospital_Analysis_Projects/Information_Dashboard (5).png",
            "Images/Hospital_Analysis_Projects/Finance_Dashboard (6).png"
        ]
    },

    samsung: {
        imageId: "samsungImage",
        counterId: "samsungCounter",
        currentIndex: 0,
        images: [
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Home_Dashboard (1).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/OverView_Dashboard (2).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Supplier_Dashboard (3).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Inventory_Dashboard (4).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Shipment_Dashboard (5).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Customer_Dashboard (6).png"
        ]
    },

    zomato: {
        imageId: "zomatoImage",
        counterId: "zomatoCounter",
        currentIndex: 0,
        images: [
            "Images/zomato_sales_Projects/Overview_Dashboard (1).png",
            "Images/zomato_sales_Projects/User_Performance_Dashboard (2).png",
            "Images/zomato_sales_Projects/City_Performance_Dashboard (3).png"
        ]
    },

    superstore: {
        imageId: "superstoreImage",
        counterId: "superstoreCounter",
        currentIndex: 0,
        images: [
            "Images/Super_Sales_store_Projects/Super_Store_Sales_Dashboard (1).png",
            "Images/Super_Sales_store_Projects/Super_Store_Sales_Forecast_Dashboard (2).png"
        ]
    }
};

// Show image
function showImage(projectName) {
    const project = projectData[projectName];

    if (!project) {
        return;
    }

    const image = document.getElementById(project.imageId);
    const counter = document.getElementById(project.counterId);

    if (!image || !counter) {
        return;
    }

    image.src = project.images[project.currentIndex];

    counter.innerText = (project.currentIndex + 1) + " of " + project.images.length;

    updateButtons(projectName);
}

// Next image
function nextImage(projectName) {
    const project = projectData[projectName];

    if (!project) {
        return;
    }

    if (project.currentIndex < project.images.length - 1) {
        project.currentIndex++;
        showImage(projectName);
    }
}

// Previous image
function prevImage(projectName) {
    const project = projectData[projectName];

    if (!project) {
        return;
    }

    if (project.currentIndex > 0) {
        project.currentIndex--;
        showImage(projectName);
    }
}

// Disable / enable buttons
function updateButtons(projectName) {
    const project = projectData[projectName];

    const prevBtn = document.querySelector(
        `.slider-btn[data-project="${projectName}"][data-action="prev"]`
    );

    const nextBtn = document.querySelector(
        `.slider-btn[data-project="${projectName}"][data-action="next"]`
    );

    if (!prevBtn || !nextBtn) {
        return;
    }

    prevBtn.disabled = project.currentIndex === 0;
    nextBtn.disabled = project.currentIndex === project.images.length - 1;
}

// Page load
document.addEventListener("DOMContentLoaded", function () {
    showImage("hospital");
    showImage("samsung");
    showImage("zomato");
    showImage("superstore");

    const buttons = document.querySelectorAll(".slider-btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const projectName = button.getAttribute("data-project");
            const action = button.getAttribute("data-action");

            if (action === "next") {
                nextImage(projectName);
            }

            if (action === "prev") {
                prevImage(projectName);
            }
        });
    });
});