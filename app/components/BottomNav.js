// lib
import React from 'react'
import Search  from 'react-icons/lib/fa/search'
import FaCaretLeft  from 'react-icons/lib/fa/caret-left'




// components

 
// other

class BottomNav extends React.Component {
 
    HandelBack= ()=>{
        window.history.back()


    }
    
    render() {

 const goBack = <div onClick={this.HandelBack} ><FaCaretLeft width="2em" height="2em"  fill="white"/></div>,
 clName="back-box"

let navBarCont;



if(this.props.tableLoading.isLoading&&!this.props.deviceData.isLoading){

    navBarCont = <div className="search-box">
    <Search />
    <input   placeholder="Search in files"/>
    
    
    </div>


}


            if(!this.props.tableLoading.isLoading&&!this.props.deviceData.isLoading){
                navBarCont=
            <div className={clName}>
                {goBack}
                Device List
            </div>


            }

                if(this.props.deviceData.isLoading){
                    navBarCont=
                    <div  className={clName}>
                           {goBack}
                 Device Data
                    </div>

                }


        return (
            <nav className="navbar bottom-nav" role="navigation ">
           {navBarCont}

        </nav>


            
        )
    }
}

export default BottomNav;

