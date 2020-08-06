import style from 'styled-components';


export const AppLogo = style.img`
    height: 10vmin;
    pointer-events: none;
    
    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 20s linear;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }      
`;


export const NavBar = style.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    background-color: rgb(44, 58, 71);  
    color: white;
    width: 80%;
    margin: auto;
`;

export const NavLinks = style.nav`
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    > a {
        text-decoration: none;
        color: white;
        cursor: pointer;
        align-items: center;
        display: flex;
        justify-content: space-around;
        width: 40%;
        min-height: 8vh;

        &:hover{
            background-color: rgb(74, 86, 97);  
        }
    }
`;


export const Welcome = style.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: opacity .3s;     
    transition-delay: 150ms;     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};    
`;

export const List = style.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
`;

export const ListItem = style.li`
    list-style: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.795);
    display: flex;
    justify-content: space-around;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
    font-size: 1.4rem;
    font-weight: bold;    
    padding:2px;
    margin-bottom: 20px;
    width: 80%;    
    transition: opacity .3s;     
    transition-delay: ${({delay}) => `${delay}ms`};     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};   
    

    &:hover{
      background-color: rgba(0,0,0,0.1); 
      transition: background-color .5s;          
    };
      
`;

export const Form = style.form`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 18vh;
    width: 80%;  
    margin: auto;
    border-bottom: 2px solid slategrey; 
    transition: opacity .3s;     
    transition-delay: 150ms;     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0}; 
`;

export const Input = style.input`
    font-size: 16px;
    padding: 14px;
    margin-right: 30px;
    border: none;
    border-bottom: 2px solid #ddd;    
    width: 350px;
    outline: none;
`;

export const Card = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto auto auto;    
    padding: 2px;
    background-color: rgba(0,0,0,0.1); 
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
    font-size: 1.4rem;
    font-weight: bold;    
    width: 80%;  
    transition: opacity .3s;     
    transition-delay: 150ms;     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};  
`;


export const AppButton = style.button`    
    cursor: pointer;
    outline: none;
    margin-left: 8px;
    display:inline-block;
    padding: 8px;
    border-radius:2px;   
    height:50px;
    width: 150px;
    border:none;
    background-color:rgb(44, 58, 71);
    color:white;
    font-size:16px;    
    transition: .5s ease-in;   

    &:hover{
        background-color:#727883;
        transition: background-color .5s;
      }
  `;
  
  
  export const AppButtonAction = style(AppButton)`
  
    background-color:lightgrey;
    height: 40px;
    width: 50px;  
    
    &:hover{
        background-color:#6d6d6d;
        transition: background-color .5s;
    }
  `;