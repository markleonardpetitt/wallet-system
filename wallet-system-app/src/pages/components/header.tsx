import { useRouter } from "next/router"

const Header = () => {
    const router = useRouter()
    const { pathname } = router

    return (
        <div className="mx-[5%]">
            <div>Wallet System</div>
        </div>
    )
}