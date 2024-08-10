export default function Navbar({ items, clearItem }) {
  return (
    <nav className="navbar bg-dark px-1 py-3 border-bottom">
      <div className="container-fluid">
        <a 
          className="navbar-brand text-white" 
          href="">欢迎来到科协
        </a>
        {/* 按钮 */}
        {items.length > 0 && (
          <button
            className="btn btn-outline-success rounded-2 text-white"
            onClick={() => clearItem()}
          >
            全部清除
          </button>
        )}
        
      </div>
    </nav>
  );
}
