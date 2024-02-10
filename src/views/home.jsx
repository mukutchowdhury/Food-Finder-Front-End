
import '../styling/homeStyle.css'


function HomeView() {
    return (
        <>
            <div className='base-background'>
                <div className='navigation-bar'>
                    {/* PlaceHolder for Nav Component */}
                </div>
                <div className='height-indent'></div>
                <div className='body-background'>
                    <div className='body-background--text-handler'>
                        <span className='body-background--text'> 
                            Food Finder
                        </span> 
                    </div>
                    <div className='body-background--login-options'>
                        <div className='login-options'>
                            <div className='login-options--body1'>
                                <div className='login-options--box'>
                                    <span className='login-options--text1'>Find What You Crave</span>
                                    <span className='login-options--text2'>A Delicious Adventure Awaits!</span>
                                </div>
                            </div>
                            <div className='login-options--body2'>
                                <button className='login-options--button'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='height-indent'></div>
                <div className='second-background-body'></div>
            </div>
        </>
    );
}


export default HomeView;