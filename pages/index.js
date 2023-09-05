import { Widget } from '@typeform/embed-react'

export default function Home() {
  return (
    <Widget id="StIuBpvq" style={{ width: '100%', height: '85vh' }} className="my-form" inlineOnMobile={false} 
    hidden={{ kiosk: '1'}}
    onQuestionChanged={(formId, ref) => {
      console.log(`Question in form ${formId} changed to ${ref}`)
    }}
    />
  )
}
