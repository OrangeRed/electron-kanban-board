import React from "react"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { KanbanColumn } from "../types"

import "./Column.css"

type ColumnProps = {
  colId: string
  colItems: KanbanColumn
}

const Column = ({ colId, colItems }: ColumnProps) => {
  return (
    <div
      className="column-container"
      style={{
        margin: 8,
        padding: 5,
        borderRadius: "5px",
        backgroundColor: "#fefefe",
      }}
    >
      <div
        className="column-head"
        style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
          paddingLeft: 15,
        }}
      >
        <div style={{ margin: 0, fontSize: "1.4rem" }}>{colItems.title}</div>
        <span style={{ fontSize: "14px", opacity: "40%" }}>{`${
          colItems.items.length
        } ${colItems.items.length === 1 ? "Card" : "Cards"}`}</span>
      </div>
      <Droppable droppableId={colId}>
        {(provided, snapshot) => {
          return (
            <div
              className="list-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                position: "relative",
                padding: 5,
                background: "#dedede",
                borderRadius: "5px",
                overflowY: "scroll",
                minHeight: 200,
                minWidth: 282,
              }}
            >
              <div
                className="top-box-shadow"
                style={{
                  position: "sticky",
                  top: -7,
                  width: "100%",
                  height: "0.6rem",
                  marginBottom: 10,
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              ></div>
              {colItems.items.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={
                            "card-container" +
                            (snapshot.isDragging ? "is-dragging" : undefined)
                          }
                          style={{
                            position: "relative",
                            width: 270,
                            backgroundColor: "#ffffff",
                            // margin: "8px 4px 8px 4px", <-- Performance issue / Non fluid drags
                            borderRadius: "5px",
                            userSelect: "none",
                            ...provided.draggableProps.style,
                          }}
                        >
                          <div
                            className="card"
                            style={{
                              padding: "4px 12px 4px 12px",
                              fontSize: 14,
                            }}
                          >
                            <h1
                              style={{
                                margin: 0,
                                fontSize: "1.1rem",
                                lineHeight: "1.3rem",
                              }}
                            >
                              {item.title}
                            </h1>
                            <div
                              style={{
                                margin: "10px 0px 10px 0px",
                                opacity: "60%",
                                maxHeight: 250,
                              }}
                            >
                              {item.content}
                            </div>
                            <hr
                              style={{
                                opacity: "10%",
                                marginBottom: 25,
                              }}
                            ></hr>
                          </div>
                        </div>
                      )
                    }}
                  </Draggable>
                )
              })}
              {provided.placeholder}
              <div
                className="bottom-box-shadow"
                style={{
                  content: "",
                  marginTop: 20,
                  position: "sticky",
                  bottom: -7,
                  width: "100%",
                  height: "0.6rem",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              ></div>
            </div>
          )
        }}
      </Droppable>
      <div
        style={{
          background: "white",
          padding: "4px 0",
          textAlign: "center",
          position: "sticky",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button>+</button>
      </div>
    </div>
  )
}

export default Column
