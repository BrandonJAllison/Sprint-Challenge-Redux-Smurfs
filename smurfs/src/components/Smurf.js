    import React from "react";
	import {connect} from 'react-redux'
	import {deleteSmurf} from '../actions/index'
	import {Link } from 'react-router-dom'
	

	const Smurf = ({ smurf, deleteSmurf }) => {
	

	    const clickHandler = () => {
	        deleteSmurf (smurf.id)
	    }
	return (
	    <div key={smurf.id}>
	    
	        
	   
	        <h2>{smurf.name}</h2>
	        <p>Smurf's Age:{smurf.age}</p>
	        <p>Add Smurf's Height:{smurf.height}</p>
            <button onClick={clickHandler}><i class="far fa-minus-square"></i></button>
	        <Link to={`/update/${smurf.id}`} style={{ textDecoration: 'none', color: '#0491C8', cursor: 'pointer' }}><i class="fas fa-pencil-alt"></i></Link>
	    </div>
	   );
	};
	

	const mapStateToProps = () =>({})
	

	export default connect(mapStateToProps, {deleteSmurf})(Smurf);
