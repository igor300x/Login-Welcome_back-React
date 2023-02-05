import styled from 'styled-components';
import hei from './assets/hei.svg';

export const Body = styled.div`
height:100vh;
background:url("${hei}");
background-size:cover;
display:flex;
justify-content:center;
align-items:center;

animation: move 15s linear alternate infinite;
@keyframes move {
    50%{background-position:50%;}
}
`;

export const Box = styled.div`
width: 90%;
max-width: 400px;height:min-content;
padding: 40px;
background:#fff;
text-align: center;
border-radius: 16px;
box-shadow: 0 0 10px rgba(0,0,0,.2);

h2{font-size:2.2rem;}
p{
    color: #404040;
    margin-top:4px;
    font-size:1.2rem;
}
`;

export const Form = styled.form`
text-align:left;
margin-top:30px;
`;

export const Group = styled.div`
margin:18px 0;

label{
    display: block;
    font-size:20px;
    color: #101010;
    font-weight:bold;
}
div{
    display:flex;
    justify-content:space-between;
}
input{
    width:100%;
    height:40px;
    margin-top:6px;
    padding:0 12px 0 34px;
    border:2px solid #c4c4c4;
    border-radius:3px;
    font-size:18px;
    color: #404040;
    transition: .3s;
}
input:focus{
    border-color:#124ce7;
    box-shadow:0 0 12px #bbd3ff;
}
input:valid{
    border-color:#124ce7;
    background:#e4edff;
}
i{
    position: absolute;
    color:#404040;
    font-size:20px;
    transform: translateX(5px) translateY(14px);
}
`;
export const Forgot = styled.a`
cursor: pointer;
color:#3784ff;
font-size:18px;

:hover{color:#124ce7}
`;

export const Inpu = styled.input`
cursor: pointer;
height:46px;
width:100%;
border-radius:3px;
font-size:22px;
margin-top:28px;
color:#fff;
background:linear-gradient(0deg,#124ce7,#3784ff);
`;