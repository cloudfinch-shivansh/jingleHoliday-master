import React from 'react'

export const CommonDiv = ({ obj }) => {
  return (
    <div className='our-services' style={{padding: '32px 16px', marginBottom: '32px'}}>
      <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px',lineHeight: 1.2 }}>{obj.h}</h3>
      <p style={{fontSize: '1.25rem', fontStyle: 'italic', marginTop: 0, marginBottom: 16}}>{obj.p}</p>
    </div>
  )
}

