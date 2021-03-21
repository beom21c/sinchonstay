import {DatePicker} from 'antd';
import moment from 'moment';
import {Card} from 'antd';
import {useEffect, useState} from "react";


const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';


export const IndexPage = () => {
    const [dateTime, setDateTime] = useState('초기에는 아무것도 없어');
    const [roomList, setRoomList] = useState([]);

    const dateSelect = (e) => {
        setDateTime()
        console.log(e, 'GPGPGPGP');
    }


    //useEffect는 원하는 시점에 실행시켜줄수 있는(함수를) 리액트 기능
    // 끝에 [] 빈배열을 넣는다면 렌더후 처음이자 첫번째로 실행시켜주는 함수 라이프 사이클( = componentdidmount())
    useEffect(() => {


        setRoomList([{
            roomType: 'Single Room',
            bed: '1 Single bed',
            bathRoom: 'Shared (with familly / other guests)'
        }])
    }, [])


    return (
        <div style={{width: 750, margin: '0px auto', height: '100vh'}}>
            <div style={{textAlign: 'center', fontSize: 25}}>Which dates would you like to book?</div>


            {/*날짜 예약 선택분*/}
            <div style={{textAlign: 'center'}}>
                <RangePicker
                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                    format={dateFormat}
                    onChange={dateSelect}
                />
            </div>

            {roomList.map((value, index) => {
               return <Card>
                    <div> RoomType : {value.roomType} </div>
                    <div> bed : {value.bed} </div>
                    <div> bathRoom : {value.bathRoom} </div>
                </Card>

            })
            }
        </div>
    )
}
