import { useState } from 'react';
import { useRouter } from 'next/router';
import { Accordion, Button, Form, Icon } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import dayjs from 'dayjs';

const Filter = () => {
    const [activeIndex, setActiveIndex] = useState(false);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const router = useRouter();

    const handleDateChange = (event, data) => {
        if (data.value) {
            const selectedDate = dayjs(data.value).format('DD-MM-YYYY');
            setFilterDate(selectedDate);
        }
    };

    const handleReset = () => {
        setFilterTitle('');
        setFilterDate('');
        setActiveIndex(false);
        const query = router.query;
        query.page = 1;
        query.title = '';
        query.date = '';
        router.push({
            pathname: router.pathname,
            query: query
        });
    };

    const handleSubmit = () => {
        if (filterTitle || filterDate) {
            setActiveIndex(false);
            const query = router.query;
            query.page = 1;
            if (filterTitle) query.title = filterTitle;
            if (filterDate) query.date = filterDate;
            router.push({
                pathname: router.pathname,
                query: query
            });
        }
    };

    return (
        <Accordion fluid styled>
            <Accordion.Title active onClick={() => setActiveIndex(!activeIndex)}>
                <Icon name="filter" />
                Filter
            </Accordion.Title>
            <Accordion.Content active={activeIndex}>
                <Form>
                    <Form.Field>
                        <label htmlFor="filterTitle">Search by Title</label>
                        <input
                            name="filterTitle"
                            placeholder="Movie title..."
                            onChange={(event) => setFilterTitle(event.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="filterDate">Show Date</label>
                        <SemanticDatepicker datePickerOnly onChange={handleDateChange} />
                    </Form.Field>
                    <Button primary type="submit" onClick={handleSubmit}>
                        Apply
                    </Button>
                    <Button type="reset" onClick={handleReset}>
                        Reset
                    </Button>
                </Form>
            </Accordion.Content>
        </Accordion>
    );
};

export default Filter;
