/* eslint-disable react/prop-types */
import dateFormat from "dateformat";
const UserDetails = ({ user }) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="rounded-md border border-slate-300 p-4 overflow-x-auto"> 
        <h4>
          <u>Basic Info</u>
        </h4>
        <table className="mt-2">
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Full Name
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {`${user?.displayName} ${user?.lastName}`}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Gender
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.gender}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Date of Birth
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {dateFormat(user?.dob, "paddedShortDate")}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Phone No
            </th>
            <td className="text-sm blur- font-light px-6 py-2 whitespace-nowrap">
              {user?.phone?.toString().replace(/.(?=.{4,}$)/g, "*")}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Subscription
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.membershipType}
            </td>
          </tr>
        </table>
        <div className="mt-4 overflow-x-auto">
          <h4>
            <u>Native Info</u>
          </h4>
          <table className="mt-2">
            <tr>
              <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
                Country
              </th>
              <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
                {user?.native?.country}
              </td>
            </tr>
            <tr>
              <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
                State
              </th>
              <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
                {user?.native?.state}
              </td>
            </tr>
            <tr>
              <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
                District
              </th>
              <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
                {user?.native?.district}
              </td>
            </tr>
            <tr>
              <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
                Mother Tounge
              </th>
              <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
                {user?.native?.motherTongue}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="rounded-md border border-slate-300 p-4 overflow-x-auto">
        <h4>
          <u>Personal Info</u>
        </h4>
        <table className="mt-2">
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Religion
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.religion}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Caste
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.caste}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Marital Status
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.maritalStatus || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Height
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.height + " CM" || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Body Type
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.bodyType || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Drinking Habits
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.drinkingHabits || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Smoking Habits
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.smokingHabits || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Food Habits
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.foodHabits || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Blood Group
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.bloodGroup || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Financial Status
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.financialStatus || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Driving Licence
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.personalInfo?.license || "Not provided"}
            </td>
          </tr>
        </table>
      </div>
      <div className="rounded-md border border-slate-300 p-4 overflow-x-auto">
        <h4>
          <u>Family Info</u>
        </h4>
        <table className="mt-2">
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Father&apos;s Name
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.family?.fatherName || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Fathers&apos;s Education
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.family?.fatherEducation}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Father&apos;s Occupation
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.family?.fatherOccupation || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Mohers&apos;s Name
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.family?.motherName || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Mother&apos;s Education
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.family?.motherEducation || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Mother&apos;s Occupation
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.family?.motherOccupation || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Home Town
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.familyAddress?.homeTown || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Pincode
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.familyAddress?.pincode || "Not provided"}
            </td>
          </tr>
        </table>
      </div>
      <div className="rounded-md border border-slate-300 p-4 overflow-x-auto">
        <h4>
          <u>Academic Info</u>
        </h4>
        <table className="mt-2">
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Academic Stream
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.academic?.academicStream || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Course
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.academic?.courseName || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Country
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.academic?.country || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              University
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.academic?.university || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Pass Out
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.academic?.passOut || "Not provided"}
            </td>
          </tr>
        </table>
      </div>
      <div className="rounded-md border border-slate-300 p-4 overflow-x-auto">
        <h4>
          <u>Occupation Info</u>
        </h4>
        <table className="mt-2">
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Occupation Stream
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.occupation?.jobStream || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Designation
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.occupation?.designation || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Annual Income
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.occupation?.annualIncome || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Country
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.occupation?.country || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              State
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.occupation?.state || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              City
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.occupation?.city || "Not provided"}
            </td>
          </tr>
        </table>
      </div>

      <div className="rounded-md border border-slate-300 p-4 overflow-x-auto">
        <h4>
          <u>Preference Data</u>
        </h4>
        <table className="mt-2">
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Caste
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.perferenceData?.caste || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Academic
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.perferenceData?.qualification?.map(
                (qualification) => qualification + " "
              ) || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Occupation
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.perferenceData?.occupation?.map(
                (occupation) => occupation + " "
              ) || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Location
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {user?.perferenceData?.location?.map(
                (location) => location + " "
              ) || "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Age
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {`${user?.perferenceData?.age?.minAge} - ${user?.perferenceData?.age?.maxAge}` ||
                "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Height
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {`${user?.perferenceData?.height?.minHeight} - ${user?.perferenceData?.height?.maxHeight}` ||
                "Not provided"}
            </td>
          </tr>
          <tr>
            <th className="pr-6 text-start py-2 whitespace-nowrap text-sm font-medium">
              Marital Status
            </th>
            <td className="text-sm font-light px-6 py-2 whitespace-nowrap">
              {`${user?.perferenceData?.maritalStatus}` || "Not provided"}
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default UserDetails;
