SELECT brand,
    GROUP_CONCAT(CONCAT(type, ' : ', price) SEPARATOR '\t') AS tipe_mobil
FROM cars
WHERE brand IN ('Honda', 'Daihatsu', 'Toyota')
GROUP BY brand;