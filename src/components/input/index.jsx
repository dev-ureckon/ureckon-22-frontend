import { useEffect, useRef } from 'react'
import InputImg from '../../assets/SVGs/input.svg'

const Input = (props) => {
  const { width = '400px', label, placeholder, name, value, onChange, type, page } = props

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const w = ref.current.parentElement.offsetWidth
      ref.current.style.height = `${0.214 * w}px`
    }
  }, [])

  return (
    <div style={{ width, height: '40%' }}>
      <p
        style={{
          color: 'white',
          margin: 0,
          fontFamily: "'Blanka', sans-serif",
          fontWeight: 400,
          fontSize: '1.5625rem',
          paddingLeft: '7px',
          lineHeight: '1rem',
          letterSpacing: '0.1em',
          textShadow: '-1px 1px 5px #0DB3B3, 1px 1px 5px #0DB3B3',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </p>
      <div
        ref={ref}
        style={{
          position: 'relative',
          width,
        }}
      >
        <img
          src={InputImg}
          alt=""
          style={{
            width: '95%',
            height: '95%',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0,
          }}
        />
        <input
          placeholder={placeholder}
          name={name}
          value={value}
          type={type}
          onChange={(e) => onChange(e)}
          disabled={
            (name === 'name' || name === 'email') && page === 'complete-profile'
              ? true
              : false
          }
          style={{
            width: '90%',
            left: '5%',
            height: '30%',
            top: '33%',
            position: 'relative',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '1.5625rem',
            color: 'white',
            paddingLeft: '10px',
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontWeight: 500,
          }}
          required
        />
      </div>
    </div>
  )
}

export default Input
