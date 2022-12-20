 styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "1px solid #644ded",
            width: "250.78px",
            height: "40px",
            boxSizing: "border-box",
            background: "#ffffff",
            borderRadius: "8px",
            "&:hover": {
              background: "#EEEEF2",
              border: "1px solid #AD9FFF",
              borderRadius: "8px",
            },
          }),

          option: (styles, { isSelected }) => ({
            ...styles,
            width: "239.93px",
            height: "32px",
            borderRadius: "6px",
            fontFamily: "Apercu Pro",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "16px",
            "&:hover": {
              background: "#EEEEF2",
              border: "1px solid #AD9FFF",
              borderRadius: "8px",
              color: "#644DED",
            },
          }),

          dropdownIndicator: (base) => ({
            ...base,
            color: "black",
            border: "1.2px  #242533",
            position: "absolute",
            left: "82.03%",
            right: "8.59%",
            top: "17.5%",
            bottom: "22.5%",
          }),
        }}
        // styles={colourStyles}
        // className="abc"
        // unstyled

        options={options}
        value={valSelected}
        onChange={getValSelected}
        menuPortalTarget={document.body}
        menuPosition={"fixed"}
        components={{
          IndicatorSeparator: () => null,
        }}