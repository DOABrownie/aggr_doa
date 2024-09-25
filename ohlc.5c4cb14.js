const e="```ts\nohlc(renderer: Renderer, time: number, value: number): {\n    time: number,\n    open: number,\n    high: number,\n    low: number,\n    close: number\n}\n```\n\nRecords the Open, High, Low, and Close (OHLC) values for a given time and value input, typically used in financial charting to represent price movements within a specified timeframe.\n\n## Parameters\n\n- `renderer`: The renderer object that includes the local timestamp.\n- `time`: The timestamp for the current data point.\n- `value`: The price value at the current timestamp.\n\n## Returns\n\nAn object containing:\n- `time`: The timestamp for the current data point.\n- `open`: The opening price, defined as the value when the state is first set.\n- `high`: The highest price observed since the last state reset.\n- `low`: The lowest price observed since the last state reset.\n- `close`: The most recent price value, representing the closing price at the current time.\n\n## Summary\n\nThe `ohlc` function initializes the state with the first value received, setting it as the opening, high, and low prices. As new values are processed, the function updates the high and low prices if the incoming value exceeds the current extremes. The latest value is always set as the close price. This function is crucial for real-time financial charting, where it's important to capture the extremes of price movements and the final price at the end of a time interval.\n\n*Note: The OHLC data is vital for technical analysis in trading, providing information about price volatility and market trends during the charting period.*\n";export{e as default};
