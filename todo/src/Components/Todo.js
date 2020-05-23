import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WARNING } from '../Constants/SnackBarVariant';
import TodoButton from 'Components/TodoButton';
import actionCreators from 'redux/action';
import {
    changeCompleteButtonStyle,
    deleteTodoItemButtonStyle,
    updateTodoItemButtonStyle,
} from 'Constants/ButtonStyles';
import { ReactComponent as Success } from 'assets/Icons/success.svg';
import { ReactComponent as Cross } from 'assets/Icons/cross.svg';
import { ReactComponent as Trash } from 'assets/Icons/trash.svg';
import { ReactComponent as Pencil } from 'assets/Icons/pencil.svg';
import { ReactComponent as Save } from 'assets/Icons/save.svg';

const TodoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    width: 90%;
    margin: 0px 0px 20px 0px;
    padding: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 40px;
        width: 90%;
        margin: 0px 0px 15px 0px;
    }
`;

const TodoData = styled.div`
    width: 80%;
    font-size: 22px;
    font-weight: 400;
    text-decoration: ${(props) =>
        props.isCompleted ? 'line-through' : 'none'};
    margin: 0 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 15px;
    }
`;

const TodoInput = styled.input`
    width: 80%;
    border: none;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    margin: 0 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 15px;
    }
`;

function Todo({ item, dispatch }) {
    const [text, setText] = useState(item.text);
    const [flag, setFlag] = useState(false);

    function onClickUpdateButton() {
        if (flag) {
            if (text !== '') {
                dispatch(
                    actionCreators.fetchUpdateTodoItem({
                        ...item,
                        text,
                    })
                );
            } else {
                dispatch(
                    actionCreators.setSnackBarState({
                        snackBarOpen: true,
                        snackBarVariant: WARNING,
                        snackBarContent: 'Please write any text.',
                    })
                );
            }
        }
        setFlag(!flag);
    }

    function onClickDeleteButton() {
        dispatch(actionCreators.fetchDeleteTodoItem(item));
    }

    function onPressEnterKey(event) {
        if (event.key === 'Enter') {
            if (text === '') {
                dispatch(
                    dispatch(
                        actionCreators.setSnackBarState({
                            snackBarOpen: true,
                            snackBarVariant: WARNING,
                            snackBarContent: 'Please write any text.',
                        })
                    )
                );
            } else {
                dispatch(
                    actionCreators.fetchUpdateTodoItem({
                        ...item,
                        text,
                    })
                );
                setFlag(!flag);
            }
        }
    }

    function onClickCompletedStatusButton() {
        dispatch(
            actionCreators.fetchUpdateTodoItem({
                ...item,
                isCompleted: !item.isCompleted,
            })
        );
    }

    return (
        <TodoContainer className="todo-item">
            <TodoButton
                onClick={onClickCompletedStatusButton}
                buttonIcon={item.isCompleted ? <Success /> : <Cross />}
                flag={flag}
                styles={changeCompleteButtonStyle}
            />
            {flag ? (
                <TodoInput
                    className="todo-input"
                    onChange={(event) => setText(event.target.value)}
                    onKeyPress={(event) => onPressEnterKey(event)}
                    value={text}
                />
            ) : (
                <TodoData isCompleted={item.isCompleted}>{item.text}</TodoData>
            )}
            <TodoButton
                onClick={onClickDeleteButton}
                buttonIcon={<Trash />}
                flag={flag}
                styles={deleteTodoItemButtonStyle}
            />
            <TodoButton
                onClick={onClickUpdateButton}
                buttonIcon={flag ? <Save /> : <Pencil />}
                flag={false}
                styles={updateTodoItemButtonStyle}
            />
        </TodoContainer>
    );
}

Todo.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    }),
    dispatch: PropTypes.func.isRequired,
};

export default connect()(Todo);
