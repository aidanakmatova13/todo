const Header = ({length}) =>{
    return(
        <div className='d-flex align-items-center'>
            <h3 className='me-5'>TO DO LIST</h3>
            {length === 0 || length === 1 ? <h4>Item:{length}</h4> : <h4>Items:{length}</h4>}
        </div>
    )
}
export default Header;