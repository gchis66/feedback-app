import ImageSpinner from '../assets/ImageSpinner.gif'

function NewSpinner() {
  return (
    <img
      src={ImageSpinner}
      alt='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}

export default NewSpinner