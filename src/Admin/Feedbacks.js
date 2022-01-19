import React from 'react'
import AdminHome from './AdminHome'

export const Feedbacks = () => {
    return (
        <>
            <AdminHome />
            <div>

                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">SR NO</th>
                            <th scope="col">Name</th>
                            <th scope="col">City</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>mansi</td>
                            <td>Chennai</td>
                            <td>98466541</td>
                            <td>GOOD</td>
                            <td>Need to Improve on Hygine</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>KESHAV</td>
                            <td>MUMBAI</td>
                            <td>878465615</td>
                            <td>BETTER</td>
                            <td>Good expiriance</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
