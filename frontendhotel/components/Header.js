import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../Context/StoreContext";

export default function HeaderComponent() {
    const {user} = useContext(UserContext);
    return (
        <div>
            <Link href="/">
                <a>
                    Header
                </a>
            </Link>
            {user.name ? <p style={{ float: "right", color: "white" }}>Hi,{user.name}</p> :
                <div style={{ float: "right" }}>
                    <Link href="/login">
                        <a>
                            Login
                        </a>
                    </Link>
                </div>}
        </div>
    )
}