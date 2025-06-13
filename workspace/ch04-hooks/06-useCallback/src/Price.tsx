function Price({ price, shippingFees, produtPrice, handleQuantityChange, quantity, buyQuantity }) {
  return (
    <>
      <h2>수량 선택</h2>
      <div>
        가격: {price.toLocaleString()}원<br />
        수량: <input type="number" min="1" max={quantity - buyQuantity} value={quantity} onChange={handleQuantityChange} />
        (배송비는 5개당 {shippingFees.toLocaleString()}원씩 추가됩니다.)
        <br />
        상품 금액: {produtPrice.toLocaleString()}원
      </div>
    </>
  );
}

export default Price;
