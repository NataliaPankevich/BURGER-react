import style from './Container.module.css';
import classNames from 'classname';

export const Container=({children, className})=>{
    
    return(
        <div className={classNames(style.container, className)}>
        {children}
        </div>
    );
}