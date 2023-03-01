const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    let rootProduct = []
    let productStringify = localStorage.getItem("productStringify")
    let newProduct = JSON.parse(productStringify)
    let currentProductStringify = localStorage.getItem("currentProductStringify")
    currentProduct = JSON.parse(currentProductStringify)
    currentProduct = rootProduct.concat(currentProduct).concat(newProduct)
    const productList = $(".product-list")
    // Tao ra san pham moi
    currentProduct.forEach(function(value, key){
        if(value !== null && value !== undefined){
        // Tạo một đối tượng div
        var productDiv = document.createElement('div');
        // Thêm class "product" vào div
        productDiv.classList.add('product');
        // Tạo thẻ img và đặt thuộc tính src và alt
        var img = document.createElement('img');
        img.setAttribute('src', `${value.viewInfoImage}`);
        img.setAttribute('alt', '');
        // Tạo div cho nội dung sản phẩm
        var contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        // Tạo div cho tiêu đề sản phẩm và đặt nội dung
        var titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.innerHTML = `<p>${value.viewInfoTitle}</p>`;
        // Tạo div cho phụ tiêu đề sản phẩm và đặt nội dung
        var subTitleDiv = document.createElement('div');
        subTitleDiv.classList.add('sub-title');
        subTitleDiv.innerHTML = '<p>Kiểu dáng năng động và thời trang rất thích hợp để làm quà tặng<br/>Vạch chia rõ ràng và chi tiết từng milimets<br/>Vỏ máy bằng thép chống oxy hóa hiệu quả</p>';
        // Tạo div cho giá sản phẩm và đặt nội dung
        var priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.innerHTML = `<p>${value.viewInfoPrice}</p>`;
        // Tạo div cho số lượng sản phẩm và đặt nội dung
        var numberChooseDiv = document.createElement('div');
        numberChooseDiv.classList.add('number-choose');
        // Tạo nút giảm số lượng sản phẩm
        var lessBtn = document.createElement('div');
        lessBtn.classList.add('btn');
        lessBtn.classList.add('less');
        lessBtn.innerHTML = '-';
        // Tạo thẻ p để hiển thị số lượng sản phẩm
        var numberP = document.createElement('p');
        numberP.classList.add('number');
        numberP.innerHTML = '1';
        // Tạo nút tăng số lượng sản phẩm
        var moreBtn = document.createElement('div');
        moreBtn.classList.add('btn');
        moreBtn.classList.add('more');
        moreBtn.innerHTML = '+';
        // Thêm nút giảm, số lượng và nút tăng vào div số lượng sản phẩm
        numberChooseDiv.appendChild(lessBtn);
        numberChooseDiv.appendChild(numberP);
        numberChooseDiv.appendChild(moreBtn);
        // Tạo div cho tổng giá sản phẩm và đặt nội dung
        var sumDiv = document.createElement('div');
        sumDiv.classList.add('sum');
        sumDiv.innerHTML = '<p>1200$</p>';
        // Tạo div cho các nút thao tác sản phẩm
        var actionDiv = document.createElement('div');
        actionDiv.classList.add('action');
        // Tạo nút xóa sản phẩm
        var deleteBtn = document.createElement('div');
        deleteBtn.classList.add('btn');
        deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        // Tạo nút hủy đặt hàng
        var cancelBtn = document.createElement('div');
        cancelBtn.classList.add('btn');
        cancelBtn.innerHTML = '<i class="fas fa-calendar-times"></i>';
        // thao tác sản phẩm
        actionDiv.appendChild(deleteBtn);
        actionDiv.appendChild(cancelBtn);
        // Thêm ảnh, nội dung sản phẩm, giá sản phẩm, số lượng sản phẩm, tổng giá và các nút thao tác vào div sản phẩm
        productDiv.appendChild(img);
        productDiv.appendChild(contentDiv);
        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(subTitleDiv);
        productDiv.appendChild(priceDiv);
        productDiv.appendChild(numberChooseDiv);
        productDiv.appendChild(sumDiv);
        productDiv.appendChild(actionDiv);
        // Đặt div sản phẩm vào một đối tượng cha trong HTML (ví dụ, một thẻ div với id là "products")
        productList.appendChild(productDiv);
        }   
}  
)
returnProduct = currentProduct.slice(0, (currentProduct.length - newProduct.length));
currentProductStringify = JSON.stringify(returnProduct)
localStorage.setItem("currentProductStringify" ,currentProductStringify)