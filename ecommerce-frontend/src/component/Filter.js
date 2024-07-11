import React from "react";
import { TextField, MenuItem, Button } from "@mui/material";

const Filter = ({ filters, setFilters, applyFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <TextField
        name="category"
        label="Category"
        select
        value={filters.category}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="Phone">Phone</MenuItem>
        <MenuItem value="Computer">Computer</MenuItem>
        <MenuItem value="TV">TV</MenuItem>
        <MenuItem value="Earphone">Earphone</MenuItem>
        <MenuItem value="Tablet">Tablet</MenuItem>
        <MenuItem value="Charger">Charger</MenuItem>
        <MenuItem value="House">House</MenuItem>
        <MenuItem value="Keypad">Keypad</MenuItem>
        <MenuItem value="Bluetooth">Bluetooth</MenuItem>
      </TextField>
      <TextField
        name="minPrice"
        label="Min Price"
        type="number"
        value={filters.minPrice}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        name="maxPrice"
        label="Max Price"
        type="number"
        value={filters.maxPrice}
        onChange={handleInputChange}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={applyFilters}
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default Filter;
