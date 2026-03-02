export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>FlowerPlant</strong>
          <p>123 Botanical Lane, Green City, 2345 Copenhagen, Denmark</p>
          <p>Email: flowplant123@flowerplant2026.dk</p>
          <p>Mobile: +452076765</p>
        </div>

        <p className="muted">© {new Date().getFullYear()} FlowerPlant. All rights reserved.</p>
      </div>
    </footer>
  )
}