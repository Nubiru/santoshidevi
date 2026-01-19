import PropTypes from 'prop-types'
import { Input, Label, LabelSpan } from '../styles/layout/Switch.styled'

export const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <Input
        $checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <Label
        $checked={isOn}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <LabelSpan $checked={isOn} className={`react-switch-button`} />
      </Label>
    </>
  )
}

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}
