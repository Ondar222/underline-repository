import warehousesSlice from "@/store/warehouses.slice"
import { Button, Form, Input, List, Select } from "antd"
import { observer } from "mobx-react-lite"
import { ChangeEvent, useEffect, useState } from "react"

enum EValue {
  true = "error",
  false = ""
}

const Calculator = observer(() => {
  const [value, setValue] = useState<number>(0)
  const [isErrored, setIsErrored] = useState<EValue>(EValue.false)

  useEffect(() => {
    value < 0 ? setIsErrored(EValue.true) : setIsErrored(EValue.false)
  }, [value])

  return (
    <Form>
      {/* <Select
        size="large"
        defaultValue={warehousesSlice.region}
        value={warehousesSlice.region}
        options={warehousesSlice.regions.map((item: string, index: number) => ({ key: index, value: item, label: item }))}
        onSelect={(e) => {
        }}
        onChange={(e: string) => {
          warehousesSlice.setRegion(e)
        }}
      /> */}

      <Input
        status={isErrored}
        type="number"
        min={0}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))}
      />

      <Select />

      <Select />
      <div className="buttons">
        <Button>
          очистить
        </Button>
        <Button>
          рассчитать
        </Button>
      </div>
      <List />
    </Form>
  )
})

export default Calculator