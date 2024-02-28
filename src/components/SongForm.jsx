import {
    useState
}
from 'react'

const SongForm = ({
    onSubmit,
    initialValue
}) => {
    const [song, setSong] = useState({
        song: initialValue.song || '',
        album: initialValue.album || '', 
		cname: initialValue.cname || 'Mr. ',
		mobile: initialValue.mobile || '+91',
		area: initialValue.area || 'Shalibanda',
		ctype: initialValue.ctype || 'NEW or Regular or Occasional',
		datepurchase: initialValue.datepurchase || '3/13/2024',
		dremainder: initialValue.dremainder || '10 days or 30 days',
		medicinespurchased: initialValue.medicinespurchased || 'Vymada 100 mg',
		grandtotal: initialValue.grandtotal || 'INR. '
    })

        const handleChangeInput = (evt) => {
        setSong({
            ...song,
            [evt.target.name]: evt.target.value,
        })
    }

    const createInputElement = (elementName) => (
         < div className = "label" >
             < label > {
            elementName
        }
         <  / label >
         < input
        onChange = {
            handleChangeInput
        }
        type = "text"
            name = {
            elementName.toLowerCase()
        }
        value = {
            song[elementName.toLowerCase()]
        }
        />
            </div > )

    const handleSubmit = (evt) => {
        evt.preventDefault()

        onSubmit(song)

        setSong({
			song: '',
			album:'',  
            cname: '',
            area: '',
            mobile: '',
            ctype: '',
            datepurchase: '',
            dremainder: '',
			medicinespurchased:'',
			grandtotal:''
        })
    }

    return (
         < form onSubmit = {
            handleSubmit
        }
         > {
        createInputElement('song')
    }{
        createInputElement('album')
    } 
		 {
        createInputElement('Cname')
    }{
        createInputElement('Area')
    }{
        createInputElement('Mobile')
    }{
        createInputElement('Ctype')
    }{
        createInputElement('Datepurchase')
    }{
        createInputElement('Dremainder')
    }{
        createInputElement('MedicinesPurchased')
    }{
        createInputElement('GrandTotal')
    }
         < button type = "submit" disabled = {
            !song.song || !song.album
        }
         >
        Submit
         <  / button >
         <  / form > )
}

export default SongForm
