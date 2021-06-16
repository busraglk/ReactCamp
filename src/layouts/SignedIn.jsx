import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C5603AQFxvoE3GBMBvw/profile-displayphoto-shrink_400_400/0/1608321079727?e=1629331200&v=beta&t=QcAubPP6NxGTAqJffbze-jPp_mycdzJ9WUgJBg9G5ro" />
                <Dropdown pointing="top left" text="Büşra">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
