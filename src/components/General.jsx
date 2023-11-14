import '../styles/general.css'
import addBox from '../addBox.svg'

function General() {
  return (
    <>
      <div className="general-information">
        <div className="general-menu">
          <h3>GENERAL INFORMATION</h3>
          <img src={addBox} className="add-button" alt="Add Button" />
        </div>
        <form id="general-form">
          <fieldset className="first-name-fieldset">
            <input type="text" id="first-name" placeholder="First Name" />
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default General;